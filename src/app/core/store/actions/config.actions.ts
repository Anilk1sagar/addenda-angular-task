import { Action, props, createAction } from '@ngrx/store';

export enum EConfigActions {
    CHANGE_CURRENT_THEME = '[Config] CHANGE_CURRENT_THEME',
}

export class ChangeCurrentTheme implements Action {
    public readonly type = EConfigActions.CHANGE_CURRENT_THEME;
    constructor(public payload: string) {}
}

// export const ChangeCurrentTheme = createAction(
//     EConfigActions.CHANGE_CURRENT_THEME,
//     props<{ currentTheme: string }>()
// );


export type ConfigActions = ChangeCurrentTheme;
