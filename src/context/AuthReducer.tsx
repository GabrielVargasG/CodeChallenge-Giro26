import { Usuario } from '../interfaces/Interfaces';
import { AuthState } from '../interfaces/Interfaces';

export type AuthAction = 
    | { type: 'signUp', payload: { user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }

export const authReducer = (state:AuthState,action:AuthAction): AuthState =>{
    switch(action.type){
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                user: action.payload.user
            }
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                user: null
            }
        case 'addError':
            return{
                ...state,
                user: null,
                status: 'not-authenticated',
                errorMessage: action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            };
            case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                user: null
            }
        default:
            return state;
    }
}