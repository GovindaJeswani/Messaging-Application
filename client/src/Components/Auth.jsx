// import React, { useState } from "react";
// import Cookies from "universal-cookie";
// import axios from "axios";

// import signUpImage from "../assets/signup.jpg";

// const cookies = new Cookies();

// const initialState = {
//   fullName: "",
//   userName: "",
//   password: "",
//   confirmPassword: "",
//   phoneNumber: "",
//   avatarURL: "",
// };

// const Auth = () => {
//   const [form, setForm] = useState(initialState);
//   const [isSignup, setIsSignup] = useState(true);
//   // const [isSignup, setIsSignup] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(form)
//     const { username, password, phoneNumber, avatarURL } = form;

//     // const {fullName, userName, password, phoneNumber, avatarURL} = form;
//     // const mongoURL = 'http://127.0.0.1:5000/auth/signupUser'

//     // const dataM = await axios.post(mongoURL,{
//     //   userName, password, fullName, phoneNumber, avatarURL
//     // }).then((res)=>{
//     //   console.log(res)
//     // }).catch(function(err){
//     //   console.log(err)
//     // })
//     // console.log(dataM)

//     const URL = "http://127.0.0.1:5000/auth";
//     // const {data : {token, userId, hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`,{
//     //   userName, password, fullName, phoneNumber, avatarURL
//     // })
//     // cookies.set('token', token);
//     // cookies.set('userName', userName);
//     // cookies.set('fullName', fullName);
//     // cookies.set('userId', userId);

//     const {
//       data: { token, userId, hashedPassword, fullName },
//     } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
//       username,
//       password,
//       fullName: form.fullName,
//       phoneNumber,
//       avatarURL,
//     });
//     console.log(form);

//     cookies.set("token", token);
//     cookies.set("username", username);
//     cookies.set("fullName", fullName);
//     cookies.set("userId", userId);

//     if (isSignup) {
//       cookies.set("phoneNumber", phoneNumber);
//       cookies.set("avatarURL", avatarURL);
//       cookies.set("hashedPassword", hashedPassword);
//     }
//     window.location.reload();
//   };
//   const switchMode = () => {
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//   };
//   return (
//     <div className="auth__form-container">
//       <div className="auth__form-container_fields">
//         <div className="auth__form-container_fields-content">
//           <p>{isSignup ? "Sign Up" : "Sign In"}</p>

//           <form onSubmit={handleSubmit}>
//             {isSignup && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   name="fullName"
//                   type="text"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}
//             <div className="auth__form-container_fields-content_input">
//               <label htmlFor="username"> Username</label>
//               <input
//                 name="userName"
//                 type="text"
//                 placeholder="Username"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {isSignup && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="phoneNumber">Phone Number</label>
//                 <input
//                   name="phoneNumber"
//                   type="text"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}
//             {isSignup && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="avatarURL">Avatar URL</label>
//                 <input
//                   name="avatarURL"
//                   type="text"
//                   placeholder="Avatar URL"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}
//             <div className="auth__form-container_fields-content_input">
//               <label htmlFor="password"> Password</label>
//               <input
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {isSignup && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}
//             <div className="auth__form-container_fields-content_button">
//               <button>{isSignup ? "Sign Up" : "Sign In"}</button>
//             </div>
//           </form>
//           <div className="auth__form-container_fields-account">
//             <p>
//               {isSignup ? "Already have an account?" : "Don't have an account?"}
//               <span onClick={switchMode}>
//                 {isSignup ? "Sign In" : "Sign Up"}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="auth__form-container_image">
//         <img src={signUpImage} alt="sign in" />
//       </div>
//     </div>
//   );
// };

// export default Auth;


import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, phoneNumber, avatarURL } = form;
        // console.log(process.env)
        const URL = process.env.REACT_APP_URL
        console.log(URL)
        // const URL = 'http://127.0.0.1:5000/auth';

        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username, password, fullName: form.fullName, phoneNumber, avatarURL,
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName" 
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                                <input 
                                    name="username" 
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    name="phoneNumber" 
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input 
                                    name="avatarURL" 
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                             ? "Already have an account?" 
                             : "Don't have an account?"
                             }
                             <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}

export default Auth