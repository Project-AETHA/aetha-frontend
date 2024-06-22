import BookImg from '/images/books.jpg';
import {Input, Checkbox} from "@nextui-org/react";

function LoginPage() {
    return (
        <>

            <div className=" min-h-screen flex items-center justify-center">
                <div className="bg-[#d4e0e7] flex rounded-lg  max-w-3xl p-5 items-center">
                    <div className="lg:w-full px-8">
                        <h2 className='font-bold text-2xl text-[#34627F]'>Login</h2>
                        <p className='text-sm mt-4 text-[#34627F]'>If you already a member, easily log in</p>
                        <form action="" className='flex flex-col gap-4'>
                        <Checkbox>Checkbox</Checkbox>
                        <Input type="email" variant="faded" label="Email" className='dark:text-red-500 hover:text-blue-400 dark:hover:text-yellow-300' />
                            <div className='relative'>
                                <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder='password' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                            </div>
                            <button className='bg-[#34627F] rounded-xl text-white py-2 hover:scale-105 duration-300'>Login</button>
                        </form>
                        <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                            <hr className='border-gray-400'></hr>
                            <p className='text-center text-sm'>OR</p>
                            <hr className='border-gray-400'></hr>
                        </div>

                        <button className='bg-white dark:text-green-400 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Login with google
                        </button>

                        <p className='mt-5 text-xs border-b py-4 border-gray-400'>Forgot your password?</p>

                        <div className='mt-3 text-xs flex justify-between items-center'>
                            <p>Don't have an account?</p>
                            <button className='py-2 px-5 bg-white-border rounded-xl hover:scale-110 duration-300'>Register</button>
                        </div>
                    </div>

                    <div className="w-1/2 md:block hidden">
                        <img className=' rounded-lg' src={BookImg} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default LoginPage;