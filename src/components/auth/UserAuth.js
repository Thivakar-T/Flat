// // import React from 'react'
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// // import useAuth from "../hooks/useAuth";
// import { connect } from "react-redux";
// const UserAuth = (props) => {
//   //   const { auth } = useAuth();
//   const auth = props;
//   console.log("props", props);
//   console.log("auth", auth);
//   const location = useLocation();

//   return auth?.allowedRoles.find(
//     (allowedRole) => allowedRole === auth?.role
//   ) ? (
//     <Outlet />
//   ) : auth?.user ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducer.user,
//     isLoggedIn: state.authReducer.isLoggedIn,
//     role: state.authReducer.role,
//     error: state.authReducer.error,
//   };
// };

// export default connect(mapStateToProps, null)(UserAuth);
// // export default UserAuth;
