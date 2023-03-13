// import { useLocation, Navigate, Outlet } from "react-router-dom";
// // import useAuth from "../hooks/useAuth";
// import { connect } from "react-redux";

// const AdminAuth = (props) => {
//   //   const { auth } = useAuth();
//   const auth = props;
//   console.log("props", props);
//   console.log("auth", auth);
//   console.log("auth", auth);

//   const location = useLocation();

//   return auth?.role === "Admin" ? (
//     <Outlet />
//   ) : auth?.user ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// // export default AdminAuth;
// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducer.user,
//     isLoggedIn: state.authReducer.isLoggedIn,
//     role: state.authReducer.role,
//     error: state.authReducer.error,
//   };
// };

// //   const mapDispatchToProps = (dispatch) => {
// //     return {
// //       onRequestDog: () => dispatch(getDog()),
// //     };
// //   };

// export default connect(mapStateToProps, null)(AdminAuth);
// // export default Visitors;
