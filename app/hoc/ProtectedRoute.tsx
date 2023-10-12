"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ReactNode, useEffect } from "react";
import { checkAuthUser } from "../store/user/userApi";

function ProtectedRoute({children} : {children: ReactNode}) {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector( state => state.user);
  const { push } = useRouter();

  useEffect(() => {
    dispatch(checkAuthUser());
  },[])
  useEffect(() => {
    if (!isLoggedIn) {
       return push('/login')
    }
  }, [isLoggedIn]);

  return children;
}

export default ProtectedRoute;