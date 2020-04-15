import { takeLatest, call, put, all} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure, endCalendar, endDetails } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, coordinator } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
      coordinator,
    });
    const responseCalendar = yield call(api.get, 'calendars');
    const calendar = responseCalendar.data[0].calendar
    console.tron.log(calendar)

    const { token, user } = response.data;
    if (!user.coordinator) {
      toast.error('Usuário não é coordenador');
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, calendar));
    history.push('/dashboard');

  } catch (err) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function setToken({ payload }) {
  if(!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* loadCalendar() {
  // const parsedCalendar = JSON.parse(payload.calendar)
  // console.tron.log(parsedCalendar)
  const responseCalendar = yield call(api.get, 'calendars');
    const calendar = responseCalendar.data[0].calendar
    console.tron.log(calendar)

  yield put(endCalendar(calendar));
}

export function* loadDetails({ payload }) {


  const parsedId = parseInt(payload)

  const responseDetails = yield call(api.get, 'contracts');
  // console.tron.log(responseDetails.data)
  const contract = responseDetails.data.find(r => r.id == parsedId)
  yield put(endDetails(contract));
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      coordinator: true,
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/LOAD_CALENDAR_REQUEST', loadCalendar),
  takeLatest('@auth/LOAD_DETAILS_REQUEST', loadDetails),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),

]);
