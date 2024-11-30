import { Button, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin.jsx";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, handleLogin } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(email, password);
  };

  return (
    <>
      <form
        className="min-h-screen flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="bg-blue-100 dark:bg-gray-800 flex rounded-lg  max-w-3xl p-5 items-center">
          <div className="px-8 lg:w-full">
            <h2 className="font-bold text-3xl text-blue-500 text-center">
              Login
            </h2>

            <div className="mt-4 flex flex-col gap-2">

              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={error => {
                  console.log(error);
                }}
              />
              
              <button className="bg-blue-200 dark:bg-gray-600 border-none rounded-lg w-full dark:text-white py-2 flex justify-center ju items-center text-sm hover:scale-105 duration-300">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2aa4f4"></stop>
                    <stop offset="1" stopColor="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
                Login with facebook
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400"></hr>
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400"></hr>
            </div>

            <div className="flex-col mt-3">
              <Input
                type="email"
                variant="faded"
                label="Email"
                placeholder="Enter your email"
                color="primary"
                className=""
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                // value={email}
              />

              <Input
                type="password"
                variant="faded"
                label="Password"
                placeholder="Enter your password"
                color="primary"
                className="mt-2"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                // value={password}
              />
            </div>

            <div className="mt-2 text-sm flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <Checkbox
                  color="primary"
                  radius="sm"
                  size="sm"
                  className="ml-2"
                />
                <p>Remember me</p>
              </div>
            </div>

            <Button
              type="submit"
              color="primary"
              variant="solid"
              radius="sm"
              className="w-full mt-6"
            >
              Login
            </Button>

            <p className="mt-5 text-sm border-b py-4 border-gray-400 text-blue-500">
              Forgot your password?
            </p>

            <div className="mt-5 text-small flex justify-between items-center gap-3">
              <p className="text-blue-500">Create a new account?</p>
              <Button color="primary" size="sm" variant="bordered">
                Signup
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
