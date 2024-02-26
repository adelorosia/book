

import { useNavigate } from "react-router-dom";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={`h-screen `}>
      <div className="flex justify-center items-center h-full">
        <div
          className={`flex flex-col lg:flex-row gap-4 font-FONT_VIGA items-center  py-6 rounded-lg w-fit bg-gray-400  px-6`}
        >
          <div className="flex items-center text-9xl bg-PRIMARY_ORANGE w-fit py-6 px-2 rounded-lg  gap-5 justify-center">
            <BsFillEmojiFrownFill className=" text-PRIMARY_GRAY" />
            <p>404</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl text-SECONDARY_ORANGE">Ooops...</p>
            <p
              className={``}
            >
              Page Not Found
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/home", { replace: true });
              }}
            >
              Go To Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
