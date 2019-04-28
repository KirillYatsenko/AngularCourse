import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as fireabase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((actions: AuthActions.TrySignup) => {
            return actions.payload
        })
        .switchMap((authData: { username: string, password: string }) => {
            return fromPromise(fireabase.auth().createUserWithEmailAndPassword(
                authData.username,
                authData.password
            ));
        })
        .switchMap(() => {
            return fromPromise(fireabase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        })

    constructor(private actions$: Actions) {

    }
}