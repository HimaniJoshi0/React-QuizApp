import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
// import Heroimg from '../assets/images/hero-image.jpg'
import Banner from "../../assets/images/auth-banner.webp";
import { apiRequest } from '../../api'
import CommonButton from '../../components/button'
import Input from '../../components/input/indesx'
import { Logo } from "../../assets/icons";

// Yup schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await apiRequest({
        method: 'POST',
        path: '/user/register',
        data,
      })
      console.log('Registration Success:', response)
    } catch (err) {
      console.error('Registration Error:', err)
    }
  }

  return (
    <div className="grid md:grid-cols-2 w-screen place-items-center h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#144d6e7a] opacity-10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-[#00A3FF] opacity-5 blur-[80px] rounded-full" />

      {/* Banner section */}
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

      {/* Form section */}
      <div className="h-full w-full px-4 md:px-10 flex flex-col flex-1 relative z-10">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text mb-4">Create Your AI-Powered Account</h2>
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="flex flex-col gap-6 w-full px-4 md:px-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Input
              label="Name"
              validations={register('name')}
              error={!!errors.name}
              helperText={errors?.name?.message || ''}
            />

            <Input
              label="Email"
              validations={register('email')}
              error={!!errors.email}
              helperText={errors?.email?.message || ''}
            />

            <Input
              label="Password"
              validations={register('password')}
              error={!!errors.password}
              helperText={errors?.password?.message || ''}
              type="password" // Added type="password" for visibility toggle
            />

            <Input
              label="Confirm Password"
              validations={register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors?.confirmPassword?.message || ''}
              type="password" // Added type="password" for visibility toggle
            />

            <div className="mt-4 w-full">
              <CommonButton
                title="Register →"
                onclick={handleSubmit(handleRegisterSubmit)}
                classes="mt-2 w-full bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white transition-all duration-300"
                variant="contained"
                type="submit"
              />
            </div>
          </form>
          <span className="text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00A3FF] hover:text-[#00FFB2] transition-colors font-medium">
              Login here
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
