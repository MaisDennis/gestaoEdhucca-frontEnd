export function signInRequest( email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}
export function signInSuccess(token, user, calendar) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user, calendar },
  };
};
export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
}
export function startCalendar() {
  return {
    type: '@auth/LOAD_CALENDAR_REQUEST',
  };
};
export function endCalendar( calendar ) {
  return {
    type: '@auth/LOAD_CALENDAR_SUCCESS',
    payload: calendar,
  };
};
export function startDetails( id ) {
  return {
    type: '@auth/LOAD_DETAILS_REQUEST',
    payload: id,
  };
};
export function endDetails( contract ) {
  return {
    type: '@auth/LOAD_DETAILS_SUCCESS',
    payload: contract,
  }
}
export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  }
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}

