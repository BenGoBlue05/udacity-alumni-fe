import * as types from './constants';

// startLoginRequest :: None -> Action
export const startLoginRequest = () => ({
  type: types.START_LOGIN_REQUEST,
});

// loginRequestSuccess :: JSON -> Action
export const loginRequestSuccess = (user) => ({
  type: types.LOGIN_REQUEST_SUCCESS,
  user,
});

// loginRequestFailure :: [Err] -> Action
export const loginRequestFailure = (errors) => ({
  type: types.LOGIN_REQUEST_FAILURE,
  errors,
});

// TODO: Get rid of this and actually hit the API.
const fakeLatency = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

export const submitLoginRequest = () =>
  (dispatch) => {
    const fakeUser = {
      name: 'David Harris',
      avatar: '',
    };
    dispatch(
      startLoginRequest()
    );
    // Hit the api here .then((res) => {...})
    fakeLatency().then(() => {
      dispatch(
        loginRequestFailure([
          {
            message: 'The app is not hooked up to the api yet, sadly 😕',
          },
        ])
      );
    });
  };

// logoutUser :: None -> Action
export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

// clearLoginErrors :: None -> Action
export const clearLoginError = (index) => ({
  type: types.CLEAR_LOGIN_ERROR,
  index,
});
