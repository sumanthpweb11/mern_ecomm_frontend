import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRouteComponent = ({ admin }) => {
  //   {
  // /* First Check
  //     if ROLE = ADMIN AND ADMIN CREDENTIALS = TRUE
  //     {
  //
  //      RETURN OUTLET OTHERWISE NAVIGATE TO LOGIN PAGE
  //     }
  //     ELSE // Check If ROLE = USER AND USER CREDENTIALS  = TRUE
  //     {
  //
  //     RETURN USERCHATCOMPONENT AND OUTLET OTHERWISE NAVIGATE TO LOGIN PAGE
  //     }
  // */
  //   }

  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRouteComponent;
