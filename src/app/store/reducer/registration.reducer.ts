import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import { addressSuccess, clientInfoSuccess, identitySuccess } from "../actions/registration.action";
import { addressModel } from "../models/address.model";
import { ClientModel } from "../models/client.model";
import { identityModel } from "../models/identity.model";
export interface registrationState {
    identity: identityModel[],
    address: addressModel[],
    client: ClientModel[]
}

export const initialState: registrationState = {
    identity: [],
    address: [],
    client: []

};

export const registrationReducer = createReducer(
    initialState,
    on(identitySuccess, (state, action) => ({
        ...state,
        identity: [{ ...action }]

    })),
    on(addressSuccess, (state, action) => ({
        ...state,
        address: [{ ...action }]
    })),
    on(clientInfoSuccess, (state, action) => ({
        ...state,
        client : [{...action}]
    })),

);

