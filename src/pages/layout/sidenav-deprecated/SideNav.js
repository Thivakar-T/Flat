// import React, { useState } from "react";
// import { Link, Outlet, NavLink } from "react-router-dom";
// import "./sidenav_style.css";

// const SideNav = () => {
//   const [isActive, setIsActive] = useState(false);

//   function handleClick() {
//     setIsActive(!isActive);
//   }

//   return (
//     <>
//       <div className="sidenav-container">
//         <div className="header">
//           <div className="toggle" onClick={handleClick}>
//             <span className="icon">
//               {isActive ? (
//                 <i className="fa fa-times"></i>
//               ) : (
//                 <i className="fa fa-bars"></i>
//               )}
//             </span>
//           </div>
//           <h3 className="mb-0 project-name text-center">
//             <span className="text-warning">F</span>lat{" "}
//             <span className="text-warning">S</span>afety
//           </h3>
//         </div>

//         <nav className={isActive ? "active" : ""}>
//           {/* <nav
//           className={`${isActive ? "active" : ""}${isLinkClicked ? "" : ""}`}
//         > */}
//           <ul>
//             <li>
//               <a className="toggle" onClick={handleClick}>
//                 <span className="icon">
//                   <i className="fa fa-bars"></i>
//                 </span>
//                 <span className="project-name title">
//                   <span className="text-warning">F</span>lat{" "}
//                   <span className="text-warning">S</span>afety
//                 </span>
//               </a>
//             </li>
//             <li>
//               <NavLink
//                 to="/"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-pie-chart"></i>
//                 </span>
//                 <span className="title">Dashboard</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/flats"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-university"></i>
//                 </span>
//                 <span className="title">Flats</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/visitors"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-id-card-o"></i>
//                 </span>
//                 <span className="title">Visitors</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/notifications"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-bell"></i>
//                 </span>
//                 <span className="title">Notifications</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/settings"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-cog"></i>
//                 </span>
//                 <span className="title">Settings</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/login"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//                 onClick={handleClick}
//               >
//                 <span className="icon">
//                   <i className="fa fa-sign-in"></i>
//                 </span>
//                 <span className="title">Login</span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/signout"
//                 className={(navData) =>
//                   navData.isActive ? "menu-active" : "none"
//                 }
//               >
//                 <span className="icon">
//                   <i className="fa fa-power-off"></i>
//                 </span>
//                 <span className="title">Sign Out</span>
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* <section className="home-section pt-2"> */}
//       <section
//         className={`home-section pt-2 ${isActive ? "content-active" : ""}`}
//       >
//         <div className="content">
//           <Outlet />
//         </div>
//       </section>
//     </>
//   );
// };

// export default SideNav;
