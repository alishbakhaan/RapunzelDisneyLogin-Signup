import { useState, React, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import boy from '../../assets/images/rapunzel.png';
import video from '../../assets/videos/bg-rapu.mp4';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: '',
    password: ''
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    if (email === '') {
      toast.error('Email field is required', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('Password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 5) {
      toast.error('Password length should be greater than five', {
        position: 'top-center',
      });
    } else {
      const userArr = JSON.parse(localStorage.getItem('useryoutube')) || [];
      const userlogin = userArr.filter((user) => user.email === email && user.password === password);
      if (userlogin.length === 0) {
        toast.error('Invalid details');
      } else {
        toast.success('Welcome to the Disney World');
        localStorage.setItem('user_login', JSON.stringify(userlogin));
        navigate('/landingpage', { replace: true });
      }
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user_login'));
    if (user) {
      navigate('/landingpage', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <div className="relative overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
        <div className="relative z-30 login-container container w-full lg:w-3/5 h-[80vh] flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group backdrop-blur-md rounded-3xl shadow-2xl m-28">
          <div className="w-full lg:w-1/2 mt-32 lg:mt-0 rounded-3xl flex relative order-2 lg:order-1 bg-[url('./assets/images/bgra.png')] bg-cover lg:bg-contain lg:h-full bg-no-repeat">
            <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
              <span className="transform block whitespace-nowrap h-full -rotate-90 text-2xl 2xl:text-[70px] font-black uppercase text-[#cfaa55] opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">Welcome To Disney</span>
            </div>
            <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center max-[1023px]:justify-start w-full opacity-50 lg:opacity-100">
              <img src={boy} alt="product" className="-mb-5 max-[1023px]:mb-32 lg:mb-40 -ml-12 max-[1023px]:-ml-0 lg:ml-0 product h-[400px] lg:h-[300px] w-auto object-cover transform 2xl:group-hover:translate-x-26 group-hover:translate-x-40 transition-all duration-1000 lg:duration-700 ease-in-out" />
              <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
              <div className="w-full space-y-5 p-11">
                <div className="form-caption flex items-end justify-center text-center space-x-3 mb-10">
                  <span className="text-3xl font-semibold text-white">Login</span>
                </div>
                <form onSubmit={addData}>
                  <div>
                    <label className="block text-white font-bold">Email Address</label>
                    <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white opacity-50 mt-2 border focus:border-blue-500 focus:bg-white focus:outline text-black" required onChange={getdata} />
                  </div>
                  <div className="mt-4">
                    <label className="block text-white font-bold">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-white opacity-50 mt-2 border focus:border-blue-500 focus:bg-white focus:outline text-black" required onChange={getdata} />
                  </div>
                  <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                  </div>
                  <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                </form>
                <div className="mt-7 grid grid-cols-3 items-center text-white-500">
                  <hr className="border-white" />
                  <p className="text-center text-sm">OR</p>
                  <hr className="border-white" />
                </div>
                <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                  <FcGoogle className="text-xl" />
                  <span className="ml-4 text-black">Login with Google</span>
                </button>
                <div className="text-sm flex justify-between items-center mt-3">
                  <p className="font-bold">If you don't have an account...</p>
                  <Link to="/register">
                    <button className="py-2 px-5 ml-3 text-black bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400">Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none" src={video}></video>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;

// import {useState,React} from 'react'
// import { Link} from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import boy from '../../assets/images/rapunzel.png'
// import video from '../../assets/videos/bg-rapu.mp4'
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {
//   const history = useNavigate();

//   const [inpval, setInpval] = useState({
//       email: "",
//       password: ""
//   })

//   const [data, setData] = useState([]);
//   console.log(inpval);

//   const getdata = (e) => {

//       const { value, name } = e.target;
  
//       setInpval(() => {
//           return {
//               ...inpval,
//               [name]: value
//           }
//       })

//   }

//   const addData = (e) => {
//       e.preventDefault();

//       const getuserArr = localStorage.getItem("useryoutube");

//       const { email, password } = inpval;
//       if (email === "") {
//           toast.error('email field is requred', {
//               position: "top-center",
//           });
//       } else if (!email.includes("@")) {
//           toast.error('plz enter valid email addres', {
//               position: "top-center",
//           });
//       } else if (password === "") {
//           toast.error('password field is requred', {
//               position: "top-center",
//           });
//       } else if (password.length < 5) {
//           toast.error('password length greater five', {
//               position: "top-center",
//           });
//       } else {

//           if (getuserArr && getuserArr.length) {
//               const userdata = JSON.parse(getuserArr);
//               const userlogin = userdata.filter((el, k) => {
//                   return el.email === email && el.password === password
//               });

//               if (userlogin.length === 0) {
//                   alert("invalid details")
//               } else {
//                   alert("Welcome To the Disney World");

//                   localStorage.setItem("user_login", JSON.stringify(userlogin))


//                   history("/landingpage")
//               }
//           }
//       }

//   }

//   return (
//     <>
//     <div className="relative overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
//       {/* <!-- remove flex classNamees from body tag to remove the horizontal and vertical position --> */}

//       <div className="relative z-30 login-container container w-full lg:w-3/5 h-[80vh] flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group backdrop-blur-md rounded-3xl shadow-2xl m-28">

//         {/* <!-- product Side --> */}
//         <div className="w-full lg:w-1/2 mt-32 lg:mt-0 rounded-3xl flex relative order-2 lg:order-1 bg-[url('./assets/images/bgra.png')] bg-cover lg:bg-contain lg:h-full bg-no-repeat">

//           <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">

//             <span className="transform block whitespace-nowrap h-full -rotate-90 text-2xl 2xl:text-[70px] font-black uppercase text-[#cfaa55] opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">Welcome To Disney</span>

//           </div>
//           {/* <!-- product text --> */}

//           <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center max-[1023px]:justify-start w-full opacity-50 lg:opacity-100">

//             <img src={boy} alt="product" className="-mb-5 max-[1023px]:mb-32 lg:mb-40 -ml-12 max-[1023px]:-ml-0 lg:ml-0 product h-[400px] lg:h-[300px] w-auto object-cover transform 2xl:group-hover:translate-x-26 group-hover:translate-x-40 transition-all duration-1000 lg:duration-700 ease-in-out" />
//             {/* <!-- product image --> */}

//             <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
//             {/* <!-- product shadow --> */}
//           </div>

//           {/* <div className="hidden lg:block w-1/3 bg-white ml-auto"></div> */}

//         </div>
//         {/* <!-- Product Side End--> */}

//         {/* <!-- Login Form --> */}

//         <div className="w-full lg:w-1/2 order-1 lg:order-2">
//           <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
//             <div className="w-full space-y-5 p-11">

//               <div className="form-caption flex items-end justify-center text-center space-x-3 mb-10">
//                 <span className="text-3xl font-semibold text-white">Login</span>
//                 {/* <span className="text-base text-gray-800">Form</span> */}
//               </div>
//               <form action="">
//                 {/* <!-- form caption --> */}

//                 <div>
//                   <label className="block text-white font-bold">Email Address</label>
//                   <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white opacity-50 mt-2 border
//                    focus:border-blue-500 focus:bg-white focus:outline text-black" autofocus autocomplete required onChange={getdata}/>
//                 </div>
//                 {/* <!-- form element --> */}


//                 <div className="mt-4">
//                   <label className="block text-white font-bold">Password</label>
//                   <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-white opacity-50 mt-2 border
//                    focus:border-blue-500 focus:bg-white focus:outline text-black" required onChange={getdata}/>
//                 </div>
//                 {/* <!-- form element --> */}

//                 <div className="text-right mt-2">
//                   <a href="#" className="text-sm font-semibold text-white hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
//                 </div>

//                 <button onClick={addData}  type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 ">Log In</button>
//                 {/* <!-- form element --> */}


//                 {/* <!-- form element --> */}
//               </form>
//               <div className="mt-7 grid grid-cols-3 items-center text-white-500">
//                 <hr className="border-white" />
//                 <p className="text-center text-sm">OR</p>
//                 <hr className="border-white" />
//               </div>

//               <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
//               <FcGoogle className='text-xl'/>
//                 <span className="ml-4 text-black">Login with Google</span>
//               </button>

//               <div className="text-sm flex justify-between items-center mt-3">
//                 <p className='font-bold'>If you don't have an account...</p>
//                 <Link to="/register">
//                 <button className="py-2 px-5 ml-3 text-black bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* <!-- form wrapper --> */}
//         </div>
//         {/* <!-- Login Form End--> */}


//       </div>
//       <video autoPlay loop muted class="absolute w-auto min-w-full min-h-full max-w-none" src={video}></video>
//       <ToastContainer/>
//     </div>
    
//   </>
//     // <div className='loginPage flex'>
//     //  <div className="container flex">
        
//     //       <div className="videoDiv">
//     //         <video src={BgVideo} autoPlay muted loop></video>

//     //         <div className="textDiv">
//     //           <h2 className="title">Astral Developers Multimedia inc.</h2>
//     //           <p>Login to your personal dashboard.</p>
//     //         </div>

//     //         <div className="footerDiv flex">
//     //         <span className="text">Don't have an account?</span>
//     //            <Link to="/register">
//     //              <button className='btn'>Register</button>
//     //            </Link>
//     //         </div>
//     //       </div>

//     //       <div className="formDiv flex">
//     //         <div className="headerDiv">
//     //           <img src={Logo} alt="logo Image" />
//     //           <h3>Welcome Back!</h3>
//     //         </div>
          

//     //        <form action="" className='form grid'>
//     //         <span className='showMessage'>Login Status will go here</span>

//     //          <div className="inputDiv">
            
//     //           <div className="input flex">
//     //             <FaUserShield className='icon' />
//     //             <input type="text" name="email" id="username" placeholder='Enter Email' required  onChange={getdata} />
//     //           </div>
//     //          </div>

//     //          <div className="inputDiv">
             
//     //           <div className="input flex">
//     //             <BsFillShieldLockFill className='icon' />
//     //             <input type="password" name="password" id="password" placeholder='Enter Password' required onChange={getdata} />
//     //           </div>
//     //          </div>

//     //          <button type='submit' onClick={addData} className='btn flex'>
//     //           <span>Login</span>
//     //          <AiOutlineSwapRight className='icon'/>
//     //          </button>

//     //          <span className="forgetPassword">
//     //           Forgot Your Password? <a href="">Click Here</a>
//     //          </span>
//     //       </form>
//     //       </div>
//     //      <ToastContainer/>
//     //  </div>
//     // </div>
//   )
// }

// export default Login




//       // <Link to="/register">To Register</Link>
//       // <Link to="/dashboard">To Dashboard</Link>