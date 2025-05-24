import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
// import Heroimg from '../assets/images/hero-image.jpg' 
import { apiRequest } from '../../api'
import CommonButton from '../../components/button'
import Input from '../../components/input/indesx'

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
      style={{
        backgroundImage:
          'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
      }}
    >
      <div className="h-full w-full px-4 md:px-10 flex flex-col flex-1">
        <Link to="/">Home</Link>
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="flex flex-col gap-4 w-full px-4 md:px-10"
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
            />

            <Input
              label="Confirm Password"
              validations={register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors?.confirmPassword?.message || ''}
            />

            <CommonButton
              title="Register"
              onclick={handleSubmit(handleRegisterSubmit)}
              classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md"
              variant="contained"
              type="submit"
            />
          </form>
          <span>
            Already have an account? <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>

      <div className="hidden md:flex h-screen">
        {/* <img
          src={Heroimg}
          alt="hero section"
          className="w-full h-full object-cover object-left"
        /> */}
      </div>
    </div>
  )
}

export default Register
