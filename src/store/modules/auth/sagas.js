import { takeLatest, call, put, all} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, coordinator } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
      coordinator,
    });
    // console.tron.log(response)

    const { token, user } = response.data;
    if (!user.coordinator) {
      toast.error('Usuário não é coordenador');
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const calendar = yield call(api.get, 'calendars');
    console.tron.log(calendar)

    yield put(signInSuccess(token, user, calendar));
    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function setToken({payload }) {
  if(!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
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
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),

]);
