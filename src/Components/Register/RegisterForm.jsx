import React, { useState } from 'react'
import { auth } from '../../../FireBase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addUser } from '../../Store/slices/UserSlice';
import { Vortex } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../FireBase';
import { ref, set } from "firebase/database";
import 'react-toastify/dist/ReactToastify.css';


function RegisterForm() {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const [loader, setLoader] = useState(false);

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [againPassword, setAgainPassword] = useState("");
    const [againPasswordErr, setAgainPasswordErr] = useState("");



    let handelRegistation = (e) => {
        e.preventDefault();
        setLoader(true);

        if (!name) {
            setNameErr("Input can't be null")
        }

        if (!email) {
            setEmailErr("Input can't be null")
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailErr("Enter a valid email")
        }

        if (!password) {
            setPasswordErr("Input can't be null")
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
            setPasswordErr("Make a strong password")
        }

        if (!againPassword) {
            setAgainPassword("")
            setAgainPasswordErr("Input can't be null")
        } else if (password !== againPassword) {
            setAgainPassword("")
            setPassword("")
            setPasswordErr("")
            setAgainPasswordErr("Password doesn't match")
        }

        if (name && email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && password && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) && againPassword && password == againPassword) {
            setLoader(true);

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then(() => {
                        // Update user information in the database
                        set(ref(db, 'users/' + user.uid), {
                            displayName: name,
                            email: email,
                            password: password
                        }).then(() => {
                            console.log(user);
                            toast.success(`Creating your account`);
                            dispatch(addUser(user));
                            localStorage.setItem("data", JSON.stringify(user));
                            setName("");
                            setEmail("");
                            setPassword("");
                            setAgainPassword("");
                            setTimeout(() => {
                                navigate('/home');
                            }, 1000);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }).catch((error) => {
                        console.log(error);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === 'auth/email-already-in-use') {
                        setEmailErr("Email is already in use");
                    } else if (errorCode === 'auth/invalid-email') {
                        setEmailErr("Invalid email");
                    } else if (errorCode === 'auth/weak-password') {
                        setPasswordErr("Password is too weak");
                    } else if (errorCode === 'auth/network-request-failed') {
                        alert("Check Your Connection");
                    }
                })
                .finally(() => {
                    setEye(false);
                    setLoader(false);
                });

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
            <form onSubmit={handelRegistation}
                className='flex flex-col gap-[18px] items-center justify-center'>

                {/* ======== full name =========== */}
                <div className='form_box'>
                    <p className='form_title md:bg-transparent md:bottom-[-5px] md:left-1 select-none'>Enter Full Name</p>
                    <input autoFocus type="text" value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameErr("");
                        }}
                        className='form_input' />
                    {nameErr && <p className='form_err'>{nameErr}</p>}
                </div>

                {/* ======== email =========== */}
                <div className='form_box'>
                    <p className='form_title md:bg-transparent md:bottom-[-5px] md:left-1 select-none'>Enter Email</p>
                    <input type="email" value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailErr("");
                        }}
                        className='form_input' />
                    {emailErr && <p className='form_err'>{emailErr}</p>}
                </div>

                {/* ======== password =========== */}
                <div className='form_box'>
                    <p className='form_title md:bg-transparent md:bottom-[-5px] md:left-1 select-none'>Enter password</p>
                    <input type={eye ? "text" : "password"} value={password} autoComplete=''
                        className='form_input'
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordErr("");
                        }} />
                    {passwordErr && <p className='form_err '>{passwordErr}</p>}
                    <div className='absolute top-[50%] right-[2px] px-3 '>
                        {
                            eye ?
                                <FaEye className='text-[25px] dark:text-white cursor-pointer' onClick={() => setEye(false)} />
                                :
                                <FaEyeSlash className='text-[25px] dark:text-white cursor-pointer' onClick={() => setEye(true)} />
                        }
                    </div>
                </div>


                {/* ======== re--password =========== */}
                <div className='form_box'>
                    <p className='form_title md:bg-transparent md:bottom-[-5px] md:left-1 select-none'>Re-type password</p>
                    <input type={"password"} value={againPassword} autoComplete=''
                        className='form_input'
                        onChange={(e) => {
                            setAgainPassword(e.target.value);
                            setAgainPasswordErr('')
                        }} />
                    {againPasswordErr && <p className='form_err absolute'>{againPasswordErr}</p>}
                    <div className='absolute top-[50%] right-[2px] px-3 '>
                    </div>
                </div>



                {/* ============ Submit ============ */}
                <button type='submit' className='form_btn mt-[10px]'>
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
                            "Register Now"
                    }

                </button>
            </form>
            <div className='mt-[30px] text-center'>
                <p className='dark:text-white'>Already have a account</p>
                <Link to={"/login"} className='text-prime hover:underline text-lg'>Log In</Link>
            </div>
        </>
    )
}

export default RegisterForm