import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  setUserLocationSuccess,
  setUserLocationFailure,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';

export function* setUserLocation({ payload }) {
  try {
    const { locationStatus, maxDistance, longitude, latitude } = payload;

    const response = yield call(api.put, '/location', {
      maxDistance,
      longitude,
      latitude,
    });

    const { location } = response.data;

    yield put(setUserLocationSuccess(locationStatus, maxDistance, location));
  } catch (err) {
    yield put(setUserLocationFailure());
  }
}

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      email,
      bio,
      techs,
      file,
      socialMedia: {
        github_url,
        linkedin_url,
        youtube_url,
        medium_url,
        twitter_url,
        website_url,
      },
      ...rest
    } = payload.data;

    const profile = {
      name,
      email,
      bio,
      techs,
      file,
      socialMedia: {
        github_url,
        linkedin_url,
        youtube_url,
        medium_url,
        twitter_url,
        website_url,
      },
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'devs', profile);

    toast.success('Profile updated successfully');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error updating profile, check your data');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@dev/SET_USER_LOCATION_REQUEST', setUserLocation),
  takeLatest('@dev/UPDATE_PROFILE_REQUEST', updateProfile),
]);
