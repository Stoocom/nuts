import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { getAuth } from "../store/userSelector";

export default function PublicRoute({ children }) {
  const { isAuth } = useSelector(getAuth, shallowEqual);

  return (isAuth === false)
    ? children
    : <Navigate to="/catalog" />
}