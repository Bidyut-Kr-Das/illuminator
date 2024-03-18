import axios from 'axios';
axios.defaults.withCredentials = true;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { setAccessToken } from '../functions/localStorageAccess.ts';
import usePostReq from '../hooks/usePostReq.ts';

type FormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  //states
  const [form, setForm] = useState<FormType>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { response, loading, postData } = usePostReq(
    // `http://localhost:8002/api/v1`
    `https://illuminatorbackend.up.railway.app/api/v1`
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (response.data && 'data' in response.data) {
      const responseData = response.data as { data: { accessToken: string } };
      // console.log(responseData.data);
      setAccessToken(responseData.data.accessToken);
      navigate(`/profile`);
    }
  }, [response]);
  const loginRequest = async () => {
    await postData<FormType>(`/users/login`, { ...form });
    setForm({ email: '', password: '' });
  };

  const handleSubmit = () => {
    if (
      form.email.trim().length === 0 ||
      form.password.trim().length === 0 ||
      form.email.indexOf(`@`) === -1
    )
      return;
    toast.promise(loginRequest, {
      loading: `Loggin in...`,
      success: () => {
        // console.log(data);
        try {
          return `Logged in successfully`;
        } finally {
          // navigate(`/profile`);
        }
      },
      error: (err: any) => {
        // console.log(err.response.data.message);
        console.log(err);
        return err.message;
      },
    });
  };
  return (
    <div className="select-none font-poppins flex flex-col gap-1">
      <h2 className=" w-full text-quaternary font-black font-kobe text-3xl drop-shadow-md">
        <span className="text-secondary">Welcome</span> back
      </h2>
      <h6 className="tracking-wider text-quaternary/70">
        Continue with your journey
      </h6>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-8 mt-12"
        method="post"
      >
        <span className="flex flex-col-reverse sm:flex-row-reverse w-full relative justify-center sm:items-center sm:gap-0 gap-2">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="shadow-md peer focus:text-secondary text-quaternary/60 outline-none bg-[#f3f3f3]  w-full h-10 px-2"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value.trim() });
            }}
          />
          <label
            htmlFor="email"
            className="text-quaternary font-bold peer-focus:text-secondary w-full sm:w-1/2"
          >
            Email
          </label>
        </span>
        <span className="flex flex-col-reverse sm:flex-row-reverse w-full relative justify-center sm:items-center sm:gap-0 gap-2">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            autoComplete="off"
            className="shadow-md peer focus:text-secondary text-quaternary/60 outline-none bg-[#f3f3f3]  w-full h-10 px-2"
            required
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
          <img
            src={`/icons/eye-${showPassword ? `open` : `close`}.svg`}
            alt="showPass"
            className="cursor-pointer absolute text-secondary right-2 bottom-3"
            onClick={() => setShowPassword(!showPassword)}
          />
          <label
            htmlFor="password"
            className="text-quaternary font-bold peer-focus:text-secondary w-full sm:w-1/2"
          >
            Password
          </label>
        </span>
        <span className="flex justify-end items-end w-full ">
          <label className="hidden sm:block sm:w-1/2"></label>
          <button
            type="submit"
            className="bg-gradient-to-tl from-secondary to-tertiary h-10 w-full rounded-md text-white font-bold shadow-md hover:shadow-sm drop-shadow-md disabled:bg-gray-500"
            disabled={loading ? true : false}
          >
            Log in
          </button>
        </span>
      </form>
      <Link className="mt-4" to={`/user/signup`}>
        Not a member yet?{' '}
        <span className="text-secondary font-medium">Join In</span>
      </Link>
      {/* <div
        onClick={async () => {
         
        }}
      >
        test
      </div> */}
    </div>
  );
};
export default LoginForm;
