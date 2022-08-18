
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { registrationState } from '../reducer/registration.reducer';

export const selectRegistration = (state: AppState) => state.registration;
export const selectAllInfo = createSelector(
    selectRegistration,
    (state: registrationState) => {
        return {
            ...state.identity,
            ...state.address,
            ...state.client
        }
    }
);