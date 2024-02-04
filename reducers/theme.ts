import { useReducer } from 'react'

export enum ThemeToggle {
  DARK = 'dark',
  LIGHT = 'light',
}

interface Action {
  type: 'CHANGE_DARK_THEME' | 'CHANGE_LIGHT_THEME'
  payload: ThemeToggle
}

const KEY_THEME = '@barber/theme'

const initialState = {
  value: localStorage.getItem(KEY_THEME)
    ? JSON.parse(localStorage.getItem(KEY_THEME) ?? '')
    : ThemeToggle.LIGHT,
}

const reducer = (state = initialState, action: Action): typeof initialState => {
  switch (action?.type) {
    case 'CHANGE_LIGHT_THEME':
      localStorage.setItem(KEY_THEME, JSON.stringify(action?.payload))
      return { ...state, value: action?.payload }
    case 'CHANGE_DARK_THEME':
      localStorage.setItem(KEY_THEME, JSON.stringify(action?.payload))
      return { ...state, value: action?.payload }
    default:
      return state
  }
}

export const useToggleTheme = () => useReducer(reducer, initialState)
