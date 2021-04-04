import { Action, Dispatch, Reducer } from 'redux'

export interface InitialState {
  language: string
}

export const initialState: InitialState = {
  language: 'English'
}

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>
}

export enum ActionType {
  UpdateLanguage,
  LogIn,
  LogOut,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  if (action.type === ActionType.UpdateLanguage) {
    return {
      ...state,
      language: state.language === 'English' ? '中文' : 'English'
    }
    // } else if (action.type === ActionType.LogIn) {
    //     return {...state, name: action.payload.name || ''};
  } else return state
}

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>

  constructor (dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch
  }

  updateLanguage = (): DispatchAction =>
    this.dispatch({ type: ActionType.UpdateLanguage, payload: {} })

  userLogIn = (user: string): DispatchAction => ({
    type: ActionType.LogIn,
    payload: user
  })

  userLogOut = (): DispatchAction => ({ type: ActionType.LogOut, payload: {} })
}
