import { AnyAction, Middleware, ThunkDispatch } from "@reduxjs/toolkit";

const authMiddleware: Middleware<
  unknown, unknown, ThunkDispatch<unknown, unknown, AnyAction>
> = () => (next) => (action) => {
  if (action.type === 'user/login/fulfilled') {
    localStorage.setItem('jwt', action.payload.token)
  }
  if (action.type === 'user/logout/fulfilled') {
    localStorage.removeItem('jwt')
  }
  return next(action)
}

export default authMiddleware;

