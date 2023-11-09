"use client";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.username,
        email: data.email,
        password: data.password,
      }),
    });
    /* const resJSON = await res.json(); */ // quitar al tener la ruta de longing
    //activar cuando se tenga la ruta loging
    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <div className="text-gray-200">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-10 pb-10">
        <Title text="CREATE YOUR ACCOUNT" />
        <h2>Generate attention-grabbing content whenever you are.</h2>
      </div>
      <form className="w-3/4 md:w-1/2 lg:w-1/3 m-auto" onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            {...register("username", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
          {errors.username?.type === "maxLength" && (
            <span>Name must not be longer than 20 characters</span>
          )}
          {errors.username?.type === "minLength" && (
            <span>Name must be greater than 2 characters</span>
          )}
        </div>

        {/*   <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Surname"
            className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            required
          />
        </div> */}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="email"
            id="email"
            placeholder="E-mail adress"
            className="w-full py-2 px-3  bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your e-mail",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="confirmEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="Confirm E-mail"
            className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            required
          />
        </div> */}

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            {...register("password", {
              required: {
                value: true,
                message: "Please enter your password",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Please confirm your password",
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="m-auto text-center">
          <Button text="Login" />
        </div>
      </form>
    </div>
  );
}
