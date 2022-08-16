
import { createSelector } from '@ngrx/store';
import { stat } from 'fs';
import { AppState } from '../app.state';
import { registrationState } from '../reducer/registration.reducer';

export const selectRegistration = (state: AppState) => state.registration;
export const selectAllInfo = createSelector(
    selectRegistration,
    (state: registrationState) => [...state.identity, ...state.client, ...state.address]
);