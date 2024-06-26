
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { DatePicker, Tooltip } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

function SignupPage() {
  const variants = ["faded"]; // Only use the faded variant

  const genderOptions = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
    { key: "not-preferred", label: "Prefer not to say" },
  ];

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center mt-6">
        <div className="bg-gray-200 dark:bg-gray-800 flex rounded-lg  max-w-3xl p-5 items-center">
          <div className="px-8 lg:w-full">
            <h2 className="font-bold text-3xl text-blue-500 text-center">
              Sign Up
            </h2>

            <div className="mt-4 flex flex-col gap-2">
              <button
                className="
                    bg-blue-200
                    dark:bg-gray-600 
                    border-none 
                    rounded-lg 
                    w-full 
                    dark:text-white 
                    py-2 
                    flex 
                    justify-center 
                    items-center 
                    text-sm 
                    hover:scale-105 
                    duration-300
                    pr-3"
              >
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Signup with google
              </button>
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
                Signup with facebook
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400"></hr>
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400"></hr>
            </div>

            <form className="flex flex-col gap-4">
              <div className="flex gap-5 mt-2 items-center">
                <Input
                  type="email"
                  variant="faded"
                  label="First Name"
                  placeholder="Enter your First Name"
                  color="primary"
                  className=""
                />
                <Input
                  type="email"
                  variant="faded"
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  color="primary"
                  className=""
                />
              </div>
              <Input
                type="email"
                variant="faded"
                label="Email"
                placeholder="Enter your email"
                color="primary"
                className=""
              />
              <div className="flex items-center gap-5">
                <Input
                  type="password"
                  variant="faded"
                  label="Password"
                  placeholder="Enter your password"
                  color="primary"
                  className=""
                />
                <Input
                  type="password"
                  variant="faded"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  color="primary"
                  className=""
                />
              </div>

              <div className="flex gap-5 items-center">
                <div
                  key="faded"
                  className=" flex w-full flex-wrap md:flex-nowrap  md:mb-0 gap-4"
                >
                  <DatePicker
                    label="Birth date"
                    variant="faded"
                    color="primary"
                  />
                </div>

                <Select
                  variant="faded"
                  label="Gender"
                  color="primary"
                  placeholder="Select your gender"
                  className="max-w-sm"
                >
                  {genderOptions.map((option) => (
                    <SelectItem
                      key={option.key}
                      value={option.key}
                      color="primary"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="">
                <label className="text-sm text-blue-500 font-bold">
                  Register as
                </label>
                <RadioGroup color="primary">
                  <div className="flex gap-5 w-full justify-around items-center">
                    <Tooltip
                      content="Can only read content"
                      color="primary"
                      placement="bottom"
                      offset={-4}
                    >
                      <Radio value="reader" color="primary">
                        Reader
                      </Radio>
                    </Tooltip>
                    <Tooltip
                      content="Can read and write content"
                      color="primary"
                      placement="bottom"
                      offset={-4}
                    >
                      <Radio value="writer" color="primary">
                        Writer
                      </Radio>
                    </Tooltip>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-6 text-xs flex justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox color="primary" radius="sm" sixe="md" />
                  <p>I agree to the terms & conditions</p>
                </div>
              </div>

              <Button color="primary" variant="solid" radius="sm">
                Register
              </Button>

              <div className="mt-5 text-small flex justify-between">
                <p className="text-blue-500">Already have an account?</p>
                <Button color="primary" size="sm" variant="bordered">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
