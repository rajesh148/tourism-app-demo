import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomSpinner from "./CustomSpinner";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      console.log(userData);
    }
  };

  // if (isLoading) {
  //   return <CustomSpinner />;
  // }

  return (
    <>
      <main>
        <section className="bg-gray-50 dark:bg-gray-900 mt-16">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link
              to="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value={name}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="password2"
                      id="confirm-password"
                      value={password2}
                      onChange={onChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <Link
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          to="#"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  // return (
  //   <>
  //     <div className="text-center mt-5">
  //       <div className="flex items-center justify-center">
  //         <svg
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           className="w-12 h-12 text-blue-500"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  //           />
  //         </svg>
  //       </div>
  //       <h2 className="text-4xl tracking-tight">Register here for your account</h2>
  //       <span className="text-sm">
  //         or{" "}
  //         <Link to="/login" className="text-blue-500">
  //           login to your account?
  //         </Link>
  //       </span>
  //     </div>
  //     <div className="flex justify-center my-2 mx-4 md:mx-0">
  //       <form
  //         className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
  //         onSubmit={onSubmit}
  //       >
  //         <div className="flex flex-wrap -mx-3 mb-6">
  //           <div className="w-full md:w-full px-3 mb-6">
  //             <label
  //               className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="Password"
  //             >
  //               Name
  //             </label>
  //             <input
  //               className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
  //               type="text"
  //               required
  //               onChange={onChange}
  //               value={name}
  //               placeholder="Enter your Name"
  //               name="name"
  //             />
  //           </div>

  //           <div className="w-full md:w-full px-3 mb-6">
  //             <label
  //               className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="Password"
  //             >
  //               Email address
  //             </label>
  //             <input
  //               className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
  //               type="email"
  //               required
  //               onChange={onChange}
  //               value={email}
  //               placeholder="Enter your Email"
  //               name="email"
  //             />
  //           </div>

  //           <div className="w-full md:w-full px-3 mb-6">
  //             <label
  //               className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="Password"
  //             >
  //               Password
  //             </label>
  //             <input
  //               className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
  //               type="password"
  //               required
  //               onChange={onChange}
  //               value={password}
  //               placeholder="Enter your Password"
  //               name="password"
  //             />
  //           </div>

  //           <div className="w-full md:w-full px-3 mb-6">
  //             <label
  //               className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="Password"
  //             >
  //               Confirm Password
  //             </label>
  //             <input
  //               className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
  //               type="password"
  //               required
  //               onChange={onChange}
  //               value={password2}
  //               placeholder="Confirm Password"
  //               name="password2"
  //             />
  //           </div>

  //           <div className="w-full md:w-full px-3 mb-6">
  //             <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
  //               Sign Up
  //             </button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );
};

export default Register;
