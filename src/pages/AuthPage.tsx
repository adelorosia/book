import { useSelector } from "react-redux";
import { RootState } from "../feature/store";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const AuthPage = () => {
    const {isLoginFormOpen}=useSelector((state:RootState)=>state.auth)
    return (
        <div className="w-full flex justify-center items-center h-screen">
           {
            isLoginFormOpen?<Login />:<Register />
           }
        </div>
    );
}

export default AuthPage;