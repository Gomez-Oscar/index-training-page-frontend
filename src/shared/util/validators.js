const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_OF_ITEM = 'ITEM';
const VALIDATOR_TYPE_URL = 'URL';
const VALIDATOR_TYPE_PDF = 'PDF';
const VALIDATOR_TYPE_MP4 = 'MP4';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_URL = () => ({ type: VALIDATOR_TYPE_URL });
export const VALIDATOR_PDF = () => ({ type: VALIDATOR_TYPE_PDF });
export const VALIDATOR_MP4 = () => ({ type: VALIDATOR_TYPE_MP4 });
export const VALIDATOR_ITEM = () => ({
  type: VALIDATOR_TYPE_OF_ITEM,
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_OF_ITEM) {
      isValid = isValid && (value === 'slides' || value === 'recordings');
    }
    if (validator.type === VALIDATOR_TYPE_URL) {
      isValid = isValid && /http:\/\//g.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_PDF) {
      isValid = isValid && /\.pdf/g.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MP4) {
      isValid = isValid && /\.mp4/g.test(value);
    }
  }
  return isValid;
};