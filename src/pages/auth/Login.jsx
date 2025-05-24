import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Banner from "../../assets/images/auth-banner.webp";
import { apiRequest } from "../../api";
import CommonButton from "../../components/button";
import Input from "../../components/input/indesx";
import { Logo } from "../../assets/icons";

// Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await apiRequest({
        method: "POST",
        path: "/user/login",
        data,
      });
      const token = response.data?.token;
      if (token) {
        Cookies.set("auth_token", token, { expires: 7 });
        console.log("Token stored in cookies:", token);
        // You can navigate or redirect here
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="grid md:grid-cols-2 w-screen place-items-center h-screen">
      <div className="hidden md:flex h-screen w-full  relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black/70 z-20"></div>
        <div className="absolute w-full p-4  top-0 left-0 z-30 flex justify-between items-center">
          <Logo height="60" width="60" />
          <div className="bg-white/40 px-2 py-1 rounded-full w-fit text-white">
            Continue to site
          </div>
        </div>
        <img
          src={Banner}
          alt="auth"
          className="w-full object-cover rounded-3xl"
        />
      </div>
      <div className="h-full w-full px-4 md:px-10 flex flex-col flex-1">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="flex flex-col gap-4 w-full px-4 md:px-10"
          >
            <Input
              label="Email"
              validations={register("email")}
              error={!!errors.email}
              helperText={errors?.email?.message || ""}
            />

            <Input
              label="Password"
              validations={register("password")}
              error={!!errors.password}
              helperText={errors?.password?.message || ""}
            />

            <CommonButton
              title="Login"
              onclick={handleSubmit(handleRegisterSubmit)}
              classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md"
              variant="contained"
              type="submit"
            />
          </form>
          <span>
            Don&apos;t have an account?{" "}
            <Link to="/register">Register here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
