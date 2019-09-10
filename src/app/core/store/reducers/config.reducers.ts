import { Action, createReducer, on } from '@ngrx/store';
// Actions
import { EConfigActions, ChangeCurrentTheme, ConfigActions } from './../actions/config.actions';

// State
export interface IConfigState {
    currentTheme: string;
}

export const initialConfigState: IConfigState = {
	currentTheme: 'default-theme',
};

export const ConfigReducers = (state = initialConfigState, action: ConfigActions): IConfigState => {

	switch (action.type) {
		case EConfigActions.CHANGE_CURRENT_THEME: {
			return {
				...state,
				currentTheme: action.payload
			};
		}
		default:
			return state;
	}
};

// const reducer = createReducer(
//     initialConfigState,
//     on(
//         ChangeCurrentTheme,
//         (state, action) => ({ ...state, ...action })
//     )
// );
  
// export function ConfigReducers(state: IConfigState, action: Action): IConfigState {
//     return reducer(state, action);
// }
