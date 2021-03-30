// action pour modale login
export const MODAL_SIGN_UP_TOGGLE = 'MODAL_SIGN_UP_TOGGLE';
export const modalSignUpFormToggle = (payload) => ({
  type: MODAL_SIGN_UP_TOGGLE,
  payload,
});

export const MODAL_LOGIN_TOGGLE = 'MODAL_LOGIN_TOGGLE';
export const modalLoginFormToggle = (payload) => ({
  type: MODAL_LOGIN_TOGGLE,
  payload,
});
