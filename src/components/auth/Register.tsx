import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";
import {
  registerApiUser,
  setIsLoginFormOpen,
  setVerifyAccountToken,
} from "../../feature/reducers/authSlice";
import { NotificationService } from "../../feature/services/notificationServices";
import { AppDispatch } from "../../feature/store";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed in first name"),

    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed in last name"),
    email: Yup.string()
      .required("Email address is required")
      .email("Invalid email address"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),

  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
    },
    onSubmit: async (values) => {
      try {
        const response = await dispatch(registerApiUser(values)).unwrap();
        console.log(response)
        NotificationService.success(response.message);
        dispatch(setVerifyAccountToken(response.verifyAccountToken))
        setTimeout(() => {
          dispatch(setIsLoginFormOpen(true));
        }, 3000);
      } catch (error: any) {
        NotificationService.error(error.message);
      }
    },

    validationSchema: formSchema,
  });

  return (
    <>
      <div
        className={`
             "flex flex-col items-center gap-12 rounded-xl"
        }`}
      >
        <div
          className={`
          h-fit w-full sm:w-full md:w-[500px]  lg:w-[500px] px-8 py-16 flex flex-col  rounded-3xl bg-STONE_300 box-theme`}
        >
          <div className="w-full flex justify-center items-center gap-5 mb-8 cursor-pointer">
            <img className="w-16 h-16" src="./images/logo.png" alt="" />
            <h3 className=" font-ANTON text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
              Crypto Currency
            </h3>
          </div>
          <div className="flex items-center gap-5 mb-8 justify-between mr-5">
            <h4 className=" font-ANTON text-3xl">Register</h4>
            <FaArrowRightLong
              className="btn btn-primary"
              onClick={() => dispatch(setIsLoginFormOpen(true))}
            />
          </div>

          <form
            className={`flex flex-col gap-3 `}
            onSubmit={formik.handleSubmit}
          >
            <input
              className={`input ${
                formik.touched.firstName &&
                formik.errors.firstName &&
                " border-red-500"
              }`}
              placeholder={`Firstname`}
              type="text"
              name="firstName"
              defaultValue={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="false"
            />
            <input
              className={`input ${
                formik.touched.lastName &&
                formik.errors.lastName &&
                " border-red-500"
              }`}
              placeholder="Lastname"
              type="text"
              name="lastName"
              defaultValue={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="false"
            />
            <input
              className={`input ${
                formik.touched.email && formik.errors.email && " border-red-500"
              }`}
              placeholder="email"
              type="email"
              name="email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="false"
            />
            <input
              className={`input ${
                formik.touched.password &&
                formik.errors.password &&
                " border-red-500"
              }`}
              placeholder="password"
              type="password"
              name="password"
              defaultValue={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="false"
            />
            <input
              className={`input ${
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword &&
                " border-red-500"
              }`}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              defaultValue={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="false"
            />

     
            <div
              className={`input ${
                formik.isValid ? "hidden" : "border-red-500 !text-red-500"
              }`}
            >
              {Object.values(formik.errors)[0]}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
