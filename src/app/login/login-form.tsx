"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { RootState, useAppDispatch, useAppSelector } from "@config/redux-store";
import { authActions } from "@rtk-slices/auth";
import PasswordInput from "@shared/templates/form/PasswordInput";
// import { regex } from "@shared/utils";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      // .matches(regex.password, regex.passwordMessage)
      .required("Password is required"),
  });

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApiLoginRequest>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit((data) => {
    // setSubmitting(true);
    dispatch(authActions.login(data));
    // await delay(2000);
    // setSubmitting(false);
  });

  return (
    <div className="mt-10 w-full sm:mx-auto sm:w-[350px] sm:max-w-sm">
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              {...register("email")}
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
            />
            {errors.email ? (
              <div className="block text-sm mt-1 text-red-500">
                {errors.email?.message}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-secondary hover:text-cyan-700"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <PasswordInput
              {...register("password")}
              id="password"
              name="password"
              className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
            />
            {errors.password ? (
              <div className="block text-sm mt-1 text-red-500">
                {errors.password?.message}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:bg-primary/50"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-sm text-center text-gray-500">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold leading-6 text-secondary hover:text-primary"
        >
          Create An Account
        </a>
      </p>
    </div>
  );
}
