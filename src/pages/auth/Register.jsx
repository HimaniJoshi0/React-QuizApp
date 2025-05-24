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
    <div
      className="grid md:grid-cols-2 w-screen place-items-center h-screen"
      // Removed the linear gradient style
      // style={{
      //   backgroundImage:
      //     'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
      // }}
    >
      {/* Added the background image section from Login.jsx */}
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

      {/* Updated the form container section */}
      <div className="h-full w-full px-4 md:px-10 flex flex-col flex-1">
        {/* Removed the Home link */}
        {/* <Link to="/">Home</Link> */}
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          {/* Updated the heading here */}
          <h2 className="text-3xl font-bold text-white mb-4">Create Your AI-Powered Account</h2>
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="flex flex-col gap-6 w-full px-4 md:px-10" // Adjusted gap to match Login
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

            <div className="mt-4 w-full"> {/* Added wrapper div and margin top */}
              <CommonButton
                title="Register"
                onclick={handleSubmit(handleRegisterSubmit)}
                classes="mt-2 w-full" // Updated classes to match Login button styling
                variant="contained"
                type="submit"
              />
            </div>
          </form>
          {/* Updated the link styling and text */}
          <span className="text-white">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Login here
            </Link>
          </span>
        </div>
      </div>

      {/* Removed the old image section */}
      {/* <div className="hidden md:flex h-screen">
        <img
          src={Heroimg}
          alt="hero section"
          className="w-full h-full object-cover object-left"
        />
      </div> */}
    </div>
  )
}

export default Register
