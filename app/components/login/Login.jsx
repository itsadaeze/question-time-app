"use client";
import { useState } from "react";
import { ChevronRightIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import ErrorMessage from "../notification/Error";

export default function LoginPage() {
  const router = useRouter();
  const [errorStatus, setErrorStatus] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Submit/LOGIN
  const onSubmit = async (params) => {
    params.grant_type = "email";
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: params.email,
      redirect: false,
      callbackUrl: "/",
    });

    // Error Handling
    console.log(res.status, "this is error=====");
    if (res.error) {
      setErrorStatus(true);
      setShowErrorMessage(true);
      setErrorMessage(
        res.status === 500
          ? "SOMETHING WENT WRONG, PLEASE TRY AGAIN"
          : res.status === 401
          ? "Invalid Login Details, Please try again"
          : "An unexpected error occurred. Please try again later."
      );
      setIsLoading(false);
      return;
    }
    return router.push("/dashboard/questions");
  };

  // Get Year
  const getYear = new Date();
  const dateString = getYear.getFullYear();
  return (
    <div className="relative p-8 justify-center min-h-screen w-full flex flex-col  bg-gradient-to-l from-blue-950 to-blue-800  ">
      <div>
        <div className="relative z-10 flex flex-col mb-40 justify-center max-w-[650px] w-full mx-auto">
          <p className="mb-3 text-white text-[22px] flex pb-1 font-thin leading-normal text-left md:text-left font-sans:Inter ">
            Adaeze{" "}
            <span className="font-bold flex">
              {" "}
              <ChevronRightIcon
                className="h-9 w-4 text-[28px] font-[1100]"
                aria-hidden="true"
              />{" "}
              AUP
            </span>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row items-start gap-6"
          >
            <div className="flex flex-col w-full">
              <input
                className="bg-white-200 rounded-md px-2 py-1  h-10"
                id="email"
                type="email"
                required
                disabled={isLoading}
                maxLength={38}
                aria-label="email address"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <div>
                {errors.email?.message && (
                  <small className="text-red-500 text-[10px] font-normal mt-1">
                    {errors.email.message}
                  </small>
                )}
                {errors.email && (
                  <div className="text-red-500 text-[10px] font-normal mt-1">
                    Email is required
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={isLoading}
              className="flex-none rounded-md w-full md:w-[110px] h-10 bg-white px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white-500 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="flex flex-row justify-center">
                {isLoading && (
                  <div className="text-left mt-1">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3  mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                )}
                <span className="text-blue-600 text-base font-semibold">
                  Login
                </span>
              </div>
            </button>
          </form>
        </div>
        <div className="flex items-center  text-center font-normal  md:text-base md:font-medium text-opacity-50 text-[10px] justify-center h-9 text-white inset-x-0 bottom-0 absolute">
          Copyright {dateString}{" "}
          <span className="flex font-bold text-center pl-1 pr-1">
            {" "}
            <AtSymbolIcon className="h-6 w-4 font-bold" aria-hidden="true" />
          </span>
          Adaeze Nigeria Ltd
        </div>

        {errorStatus && (
          <ErrorMessage
            showErrorMessage={showErrorMessage}
            setShowErrorMessage={setShowErrorMessage}
            title={"Error"}
            message1={errorMessage}
          />
        )}
      </div>
    </div>
  );
}
