"use client"
import Button from "@/components/Button"
import Title from "@/components/Title"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import ButtonSignUpGoogle from "@/components/ButtonSignUpGoogle"
 

export default function AuthPage() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const router = useRouter();
  const [error, setError] = useState(null)

  const onSubmit= handleSubmit(async data => {
     const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
     })
    
     if(res.error){
      setError(res.error)     
     }else{
      router.push('/input')
     }
 
  })

  return <div className="text-gray-200 pt-36">
    <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-10 pb-10">
      <Title text="LOGIN"/>
    <h2>Do you have an account in a COPY.AI?</h2>
    </div>
  <form className="w-3/4 md:w-1/2 lg:w-1/3 m-auto  " onSubmit={onSubmit} /* onSubmit={e => signIn("credentials", { email: e.target.email.value, password: e.target.password.value })} */>
  <div className="mb-4">

    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"></label>
    {error && (
      <span className="text-red-500">
      {error} 
      </span>
    )}
    <input
      type="email"
      id="email"
      name="email"
      placeholder="E-mail adress"
      className="w-full py-2 px-3  bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
      {...register("email",{
        required: {
          value:true,
          message: "Email is required"
        }
      })}
    />
    {errors.email && (
            <span className="text-red-500">
              {errors.email.message} 
            </span>
          )}
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2"></label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
      {...register("password",{
        required: {
          value:true,
          message: "Password is required"
        } } )
      }
    />
    {errors.password && (
            <span className="text-red-500">
              {errors.password.message} 
            </span>
          )}
  </div>
  <div className="m-auto text-center">
  <Button text="Login"/>
  <ButtonSignUpGoogle/>
  </div>
</form>
</div>
}
