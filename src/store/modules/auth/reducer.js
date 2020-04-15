import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  calendar: null,
  contract: null,
};

export default function auth(state= INITIAL_STATE, action) {

  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.calendar = action.payload.calendar;
        draft.contract = null;
      })

    case '@auth/SIGN_IN_FAILURE':
      return produce(state, draft => {
      draft.loading = false;
      })
    case '@auth/LOAD_CALENDAR_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })
    case '@auth/LOAD_CALENDAR_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.calendar = action.payload;
      })
    case '@auth/LOAD_DETAILS_REQUEST':
    return produce(state, draft => {
      // draft.loading = true;
    })

    case '@auth/LOAD_DETAILS_SUCCESS':
      return produce(state, draft => {
        // draft.loading = false;
        draft.contract = action.payload;
      })
    case '@auth/SIGN_OUT' :
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      })
    default:
      return state;
  }
}
