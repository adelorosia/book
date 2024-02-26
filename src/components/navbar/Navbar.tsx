import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setBookId } from "../../feature/reducers/bookSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  return (
    <div className=" container px-5 font-FONT_VIGA flex items-center justify-between">
      <div className="flex gap-4">
        <NavLink to={"/home"} onClick={() => dispatch(setBookId(""))}>
          Home
        </NavLink>
        <NavLink to={"/user"} onClick={() => dispatch(setBookId(""))}>
          User
        </NavLink>
      </div>
      <div>
        <div>
          <button className="bg-green-500 px-6 py-2 rounded-lg" onClick={()=>navigate("/auth")}>
            login/register
          </button>
        </div>
        <div className="hidden items-center gap-2 bg-green-500 px-6 py-2 rounded-lg ">
          <img className="w-6 h-6" src="./images/user.png" alt="" />
          <p>Adel</p>
          <p>Namazi</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
