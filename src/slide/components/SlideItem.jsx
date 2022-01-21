import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContenxt } from '../../shared/context/auth-context';

import './SlideItem.css';

const SlideItem = (props) => {
  const auth = useContext(AuthContenxt);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const history = useHistory();

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/slides/${props.id}`,
        {
          method: 'DELETE',
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setShowConfirmModal(false);
      props.onDelete(props.id);
      history.push('/slides');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Be careful"
        footerClass="place-item__modal-actions"
      >
        <h2 className="center">Do you want to delete this item?</h2>
        <React.Fragment>
          <Button modal onClick={confirmDeleteHandler}>
            DELETE
          </Button>
          <Button modal onClick={cancelDeleteHandler}>
            CANCEL
          </Button>
        </React.Fragment>
      </Modal>

      <li className="slide-item">
        <Card className="slide-item__content">
          <h3 className="slide-item__title">{props.title}</h3>
          <div className="slide-item__image">
            <img src={props.image} alt="" />
          </div>
          <Button to={`/slides/${props.id}`} view>
            View
          </Button>
          {auth.isLoggedIn && (
            <Button to={`/update-slide/${props.id}`} view>
              Update
            </Button>
          )}
          {auth.isLoggedIn && (
            <Button view onClick={showDeleteWarningHandler}>
              Delete
            </Button>
          )}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default SlideItem;
