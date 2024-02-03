import { useReducer } from 'react'

export enum ThemeToogle {
  DARK = 'dark',
  LIGHT = 'light',
}

interface Action {
  type: 'CHANGE_DARK_THEME' | 'CHANGE_LIGHT_THEME'
  payload: ThemeToogle
}

const initialState = {
  theme: ThemeToogle.LIGHT,
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT_THEME':
      return { ...state, theme: action.payload }
    case 'CHANGE_DARK_THEME':
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

export const useToggleTheme = () => useReducer(reducer, initialState)
