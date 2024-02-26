import { useParams } from "react-router-dom";
import VerifyAccount from "../components/verifyAccount/VerifyAccount";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../feature/store";
import { setVerifyAccountToken } from "../feature/reducers/authSlice";

const VerifyAccountPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  dispatch(setVerifyAccountToken(token));
  return (
    <div>
      <VerifyAccount />
    </div>
  );
};

export default VerifyAccountPage;
