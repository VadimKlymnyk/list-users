import { put, call, takeEvery } from "redux-saga/effects";
import { addNewUser, editUserInfo, getAllUsers, removeUser } from "../../api/request";
import {
  ADD_USER,
  ADD_USER_REQUESTED,
  DELETE_USER_REQUESTED,
  EDIT_USER,
  EDIT_USER_REQUESTED,
  GET_USERS,
  GET_USERS_REQUESTED,
} from "../action/action";

function* getUsers() {
  const users = yield call(getAllUsers);
  yield put({ type: GET_USERS, payload: users });
}

function* addUser({ payload }) {
  const user = yield call(addNewUser, payload);
  yield put({ type: ADD_USER, payload: user });
}

function* editUser({ payload }) {
  const user = yield call(editUserInfo, payload);
  yield put({ type: EDIT_USER, payload: user });
}

function* deleteUser({ payload }) {
    const users = yield call(removeUser, payload);
    yield put({ type: GET_USERS, payload: users });
  }

export default function* todoSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
  yield takeEvery(ADD_USER_REQUESTED, addUser);
  yield takeEvery(EDIT_USER_REQUESTED, editUser);
  yield takeEvery(DELETE_USER_REQUESTED, deleteUser);
}
