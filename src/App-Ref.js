// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/login/LoginPage";
// import DashBoardPage from "./pages/dashboard/DashBoardPage";
// import MainLayout from "./pages/layout/mainlayout/MainLayout";
// import Flats from "./pages/flats/Flats";
// import Visitors from "./pages/visitors/Visitors";
// import NoPage from "./pages/nopage/NoPage";
// import AdminAuth from "./components/auth/AdminAuth";
// import UserAuth from "./components/auth/UserAuth";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           {/* <Route index element={<DashBoardPage />}></Route> */}
//           <Route element={<AdminAuth />}>
//             <Route index element={<DashBoardPage />}></Route>

//             <Route path="/visitors" element={<Visitors />}></Route>
//           </Route>
//           {/* <Route path="/flats" element={<Flats />}></Route> */}
//           {/* <Route path="/visitors" element={<Visitors />}></Route> */}
//           <Route element={<UserAuth />}>
//             <Route index element={<DashBoardPage />}></Route>
//             <Route path="/flats" element={<Flats />}></Route>
//             <Route path="/visitors" element={<Visitors />}></Route>
//           </Route>
//           <Route path="*" element={<NoPage />} />
//         </Route>
//         <Route path="/login" element={<LoginPage />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
