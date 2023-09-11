// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux"
// import { isLogin } from '../../store/slices/userSlice'


// export function ProtectedRoute({ redirectPath = '/login'}) {
//   const isAllowed = useSelector(isLogin)
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace />
//   }

//   return <Outlet />
// }