import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../feature/store";
import {
  verifyApiAccount,
} from "../../feature/reducers/authSlice";
import { useEffect, useState } from "react";
import NotFound from "../notFound/NotFound";
import { useNavigate } from "react-router-dom";
import { NotificationService } from "../../feature/services/notificationServices";

const VerifyAccount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState("");
const navigate=useNavigate()
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const response = await dispatch(verifyApiAccount(token));
        setMessage(response.payload);
        console.log(response.payload)
        NotificationService.success("Go to login page")
        setTimeout(()=>{
            navigate("/auth")
        },4000)
      } catch (error: any) {
        setMessage(error);
      }
    };

    verifyAccount();
  }, [token]);
  return (
    <div className="container px-5 h-screen flex justify-center items-center">
      {message ? (
        <div className="w-full h-32 bg-green-500 flex justify-center items-center font-FONT_VIGA font-bold text-3xl rounded-lg">
          successfull verify Acount
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default VerifyAccount;
