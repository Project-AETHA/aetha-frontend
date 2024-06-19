import BookImg from '../../assets/Images/books.jpg';



function SignupPage() {
    return (
        <>

            <div className=" min-h-screen flex items-center justify-center">
                <div className="bg-[#d4e0e7] flex rounded-lg  max-w-3xl p-5 items-center">

                    <div className="w-1/2 md:block hidden">
                        <img className=' rounded-lg' src={BookImg} alt="" />
                    </div>

                    <div className="md:w-1/2 px-16">
                        <h2 className='font-bold text-2xl text-[#34627F] text-center' >Register</h2>
                        <form action="" className='flex flex-col gap-4'>
                            <input className='p-2 mt-8 rounded-md border placeholder-gray-500' type="text" name="username" placeholder='username' />
                            <input className='p-2 rounded-md border placeholder-gray-500' type="text" name="email" placeholder='email address' />
                            <div className='relative'>
                                <input className="p-2 rounded-md border w-full placeholder-gray-500" type="password" name="password" placeholder='password' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                            </div>
                            <input className='p-2 rounded-md border ' type="date" name="birthday" />
                            <select className='p-2 rounded-md border' name="gender">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <button className='bg-[#34627F] rounded-md text-white py-2 hover:scale-105 duration-300'>Register</button>
                        </form>


                        <div className='mt-6 text-xs flex justify-between items-center'>
                            <div className='flex items-center'>
                                <input type="checkbox" className='mr-2' />
                                <p>I agree to the terms & conditions</p>
                            </div>
                        </div>


                        <div className='mt-3 text-xs flex justify-between items-center'>
                            <p>Already have an account?</p>
                            <button className='py-1 px-3 bg-white border rounded-md hover:scale-110 duration-300'>Login</button>
                        </div>
                    </div>




                </div>
            </div>









        </>
    )
}

export default SignupPage;