import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading/Loading";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
