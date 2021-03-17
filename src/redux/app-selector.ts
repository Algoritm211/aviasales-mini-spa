import { RootState } from "./store"


export const getAppReady = (state: RootState) => {
  return state.appReducer.isReady
}
