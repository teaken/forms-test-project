import { Action, createAction, props } from '@ngrx/store';
import { addressModel } from '../models/address.model';
import { ClientModel } from '../models/client.model';
import { identityModel } from '../models/identity.model';
export enum RegistrationActionType {
  IDENTITY_PASSED = '[Identity] Identity Success',
  ADDRESS_PASSED = '[Addresss] Address Success',
  CLIENT_INFO_PASSED = '[Client] Client Info Success',
}


export const identitySuccess = createAction(RegistrationActionType.IDENTITY_PASSED, props<identityModel>());
export const addressSuccess = createAction(RegistrationActionType.ADDRESS_PASSED, props<addressModel>());
export const clientInfoSuccess = createAction(RegistrationActionType.CLIENT_INFO_PASSED, props<ClientModel>());