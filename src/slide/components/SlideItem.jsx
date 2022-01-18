import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContenxt } from '../../shared/context/auth-context';

import './SlideItem.css';

const SlideItem = (props) => {
  const auth = useContext(AuthContenxt);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => console.log('Deleting');

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
            <Button to={`/update/${props.id}`} view>
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
