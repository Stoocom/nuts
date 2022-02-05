import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { getAuth } from "../store/userSelector";

export default function PrivateRoute({ children }) {
  const { isAuth } = useSelector(getAuth, shallowEqual);
  console.log("PrivateRoute " + isAuth);

  // useEffect(() => {
  //   console.log()
  // }, [isAuth]);

  return isAuth === false
    ? children
    : <Navigate to="/catalog" />
}