import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./feature/store";
import { setVerifyAccountToken } from "./feature/reducers/authSlice";


const App = () => {
// const {token}=useSelector((state:RootState)=>state.auth)
// const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(setVerifyAccountToken(token))
//   },[token])

  return (
    <div>
      <header className="my-2">
       <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;