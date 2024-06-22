import BookImg from '/images/books.jpg';
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";


function SignupPage() {

    const variants = ["underlined"]; // Only use the underlined variant

    const genderOptions = [
        { key: "male", label: "Male" },
        { key: "female", label: "Female" },
        { key: "other", label: "Other" },
        { key: "not-preferred", label: "Prefer not to say" }
    ];


    return (


        <>
            <div className=" min-h-screen flex items-center justify-center mt-6">
                <div className="bg-[#d4e0e7] flex rounded-lg  max-w-3xl p-5 items-center">

                    <div className="w-1/2 md:block hidden">
                        <img className=' rounded-lg' src={BookImg} alt="" />
                    </div>

                    <div className="md:w-1/2 px-16">
                        <h2 className='font-bold text-3xl text-blue-500 text-center' >Sign Up</h2>


                        <button className='bg-blue-200 dark:text-green-400 border py-2 w-full  mt-6 flex justify-center items-center text-sm hover:scale-105 duration-300'>
                            <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            with google
                        </button>
                        <button className='bg-red-300 dark:text-green-400 border py-2 w-full flex justify-center ju items-center text-sm hover:scale-105 duration-300'>
                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                            with facebook
                        </button>

                        <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
                            <hr className='border-gray-400'></hr>
                            <p className='text-center text-sm'>OR</p>
                            <hr className='border-gray-400'></hr>
                        </div>



                        <form action="" className='flex flex-col gap-4'>
                            <Input type="email" variant="underlined" label="First Name" placeholder="Enter your First Name" color="primary" className='mt-2' />
                            <Input type="email" variant="underlined" label="Last Name" placeholder="Enter your Last Name" color="primary" className='' />
                            <Input type="email" variant="underlined" label="Email" placeholder="Enter your email" color="primary" className='' />
                            <Input type="password" variant="underlined" label="Password" placeholder="Enter your password" color="primary" className='' />
                            <Input type="password" variant="underlined" label="Confirm Password" placeholder="Re-enter your password" color="primary" className='' />
                            <div key="underlined" className=" flex w-full flex-wrap md:flex-nowrap  md:mb-0 gap-4">
                                <DatePicker label="Birth date" variant="underlined" color='primary' />
                            </div>

                            <Select
                                variant="underlined"
                                label="Gender"
                                placeholder="Select your gender"
                                className="max-w-sm"

                            >
                                {genderOptions.map((option) => (
                                    <SelectItem key={option.key} value={option.key}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <div className="">
                                <label className="text-sm font-thin text-grey-900">Register as</label>
                                <div className="flex items-center mt-2 space-x-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="reader"
                                            name="role"
                                            value="reader"
                                            className="h-4 w-4 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="reader" className="ml-2 block text-sm text-gray-900">
                                            Reader
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="writer"
                                            name="role"
                                            value="writer"
                                            className="h-4 w-4  border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="writer" className="ml-2 block text-sm text-gray-900">
                                            Writer
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className='mt-6 text-xs flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <Checkbox color="primary" radius="sm" sixe="md" />
                                    <p>I agree to the terms & conditions</p>
                                </div>
                            </div>



                            <Button color="primary" variant="solid" radius="sm">
                                Register
                            </Button>



                            <div className='mt-5 text-small flex justify-between'>
                                <p className='text-blue-500'>Already have an account?</p>
                                <Button color="primary" size="sm" variant="bordered">
                                    Login
                                </Button>

                            </div>

                        </form>





                    </div>




                </div >
            </div >







        </>
    )
}

export default SignupPage

