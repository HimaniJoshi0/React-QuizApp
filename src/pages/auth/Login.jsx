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
    <div className="grid md:grid-cols-2 w-screen place-items-center h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#144d6e7a] opacity-10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-[#00A3FF] opacity-5 blur-[80px] rounded-full" />

      <div className="hidden md:flex h-screen w-full relative">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r bg-black/60 z-20"></div>
        <div className="absolute w-full p-4 top-0 left-0 z-30 flex justify-between items-center">
          <Logo height="60" width="60" />
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
            Continue to site
          </div>
        </div>
        <img
          src={Banner}
          alt="auth"
          className="w-full object-cover"
        />
      </div>

      <div className="h-full w-full px-4 md:px-10 flex flex-col flex-1 relative z-10">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text mb-4">Welcome Back</h2>
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="flex flex-col gap-6 w-full px-4 md:px-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
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
              type="password"
            />

            <div className="flex items-center justify-between text-gray-400 text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#00A3FF] focus:ring-[#00A3FF]" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-[#00A3FF] hover:text-[#00FFB2] transition-colors">Forgot password?</a>
            </div>

            <div className="mt-4 w-full">
              <CommonButton
                title="Login →"
                onclick={handleSubmit(handleRegisterSubmit)}
                classes="mt-2 w-full bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white transition-all duration-300"
                variant="contained"
                type="submit"
              />
            </div>
          </form>
          <span className="text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#00A3FF] hover:text-[#00FFB2] transition-colors font-medium">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
