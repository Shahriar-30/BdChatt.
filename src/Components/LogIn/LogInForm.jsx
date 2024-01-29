import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../FireBase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { Vortex } from 'react-loader-spinner'
import { addUser } from '../../Store/slices/UserSlice';

function LogInForm() {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const [err, setErr] = useState(false);
    const [loader, setLoader] = useState(false);

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");


    let logUser = async (e) => {
        e.preventDefault();

        if (!email) {
            setErr(true)
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErr(true)
        }

        if (!password) {
            setErr(true)
        }

        if (email && password && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setLoader(true)
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    dispatch(addUser(userCredential.user));
                    localStorage.setItem("data", JSON.stringify(userCredential.user))
                    toast.success(`Login to your account`)
                    setEmail("")
                    setPassword("")
                    setTimeout(() => {
                        navigate('/home')
                    }, 1500);
                })
                .catch((error) => {
                    setErr(true);
                    console.log(error);
                }).finally(()=> {
                    setLoader(false)
                    setEye(false)
                })
        }

    }



    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
            <form onSubmit={logUser}
                className='flex flex-col items-center justify-center'>
                {/* ======== err =========== */}
                {err && <div className=' bg-red-400 px-[35px] py-[5px] select-none rounded flex flex-col items-center justify-center transition-all duration-[.5s] '>
                    <p className='font-bold '>Something went wrong</p>
                    <p>Make the correct input or,</p>
                    <Link className='text-white hover:underline hover:text-prime transition-all duration-[.5s] '>Create An Acoount</Link>

                </div>}
                {/* ======== email =========== */}
                <div className='form_box'>
                    <p className='form_title'>Enter Email</p>
                    <input type="email" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailErr("")
                            setErr(false)
                        }}
                        className='form_input' />
                    {/* {emailErr && <p className='form_err relative'>{emailErr}</p>} */}
                </div>
                {/* ======== password =========== */}
                <div className='form_box'>
                    <p className='form_title'>Enter password</p>
                    <input type={eye ? "text" : "password"} value={password} autoComplete=''
                        className='form_input'
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setPasswordErr("")
                            setErr(false)
                        }} />
                    <div className='absolute top-[39%] right-[2px] px-3 '>
                        {
                            eye ?
                                <FaEye className='text-[25px] dark:text-white cursor-pointer' onClick={() => setEye(false)} />
                                :
                                <FaEyeSlash className='text-[25px] dark:text-white cursor-pointer' onClick={() => setEye(true)} />
                        }
                    </div>
                        {/* {passwordErr && <p className='form_err relative'>{passwordErr}</p>} */}
                    <p className='text-[15px] pt-[2px] pl-[10px] hover:underline cursor-pointer dark:text-white'>Forget Password?</p>
                </div>
                <button className='form_btn' type='submit'>
                    {
                        loader ?
                            <Vortex
                                visible={true}
                                height="40"
                                width="40"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['#eee', 'black', '#eee', 'black', 'black', '#eee']}
                            />
                            :
                            "Log In"
                    }

                </button>
            </form>
            <div className='mt-[30px] text-center'>
                <p className='dark:text-white'>Don't have a account</p>
                <Link to={"/register"} className='text-prime hover:underline text-lg'>Register Now</Link>
            </div>
        </>
    )
}

export default LogInForm