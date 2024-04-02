import axios from 'axios';
axios.defaults.withCredentials = true;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { setAccessToken } from '../functions/localStorageAccess.ts';
import usePostReq from '../hooks/usePostReq.ts';

type SignupFormFields = {
  name: string;
  email: string;
  password: string;
  confPassword: string;
};

const SignupForm = () => {
  //states
  const [form, setForm] = useState<SignupFormFields>({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [matchPass, setMatchPass] = useState<boolean>(false);
  const { response, loading, postData } = usePostReq(
    // `http://localhost:8002/api/v1`
    `https://illuminatorbackend.up.railway.app/api/v1`
  );

  const navigate = useNavigate();

  //run when response changes
  useEffect(() => {
    if (response.data && 'data' in response.data) {
      const responseData = response.data as { data: { accessToken: string } };
      setAccessToken(responseData.data.accessToken);
      navigate(`/profile`);
    }
  }, [response]);

  const loginRequest = async () => {
    await postData<SignupFormFields>(`/users/signup`, { ...form });
  };
  const handleSubmit = async () => {
    // console.log(form);
    if (!matchPass) return;
    if (
      form.name.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.password.trim().length === 0 ||
      form.confPassword.trim().length === 0 ||
      form.email.indexOf(`@`) === -1
    )
      return;
    toast.promise(loginRequest, {
      loading: 'Signing up...',
      success: () => {
        // console.log(data);
        return 'Signup successful';
      },
      error: (error: any) => {
        // console.log(error);
        return error.message;
      },
    });
  };

  return (
    <div className="select-none font-poppins flex flex-col gap-1">
      <h2 className=" w-full text-quaternary font-black font-kobe text-3xl drop-shadow-md">
        <span className="text-secondary">Connect</span> with us
      </h2>
      <h6 className="tracking-wider text-quaternary/70">Sign up today!</h6>
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
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="shadow-md peer focus:text-secondary text-quaternary/60 outline-none bg-[#f3f3f3]  w-full h-10 px-2"
            required
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <label
            htmlFor="name"
            className="text-quaternary font-bold peer-focus:text-secondary w-full sm:w-1/2"
          >
            Name
          </label>
        </span>
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
        <span className="flex flex-col-reverse sm:flex-row-reverse w-full relative justify-center sm:items-center sm:gap-0 gap-2">
          <input
            type={showPassword ? 'text' : 'password'}
            name="confPassword"
            id="confPassword"
            autoComplete="off"
            className={`shadow-md peer focus:text-secondary text-quaternary/60 outline-none bg-[#f3f3f3]  w-full h-10 px-2 ${!matchPass && form.confPassword.length > 0 ? ' border-2 border-red-500' : `border-none`}`}
            required
            value={form.confPassword}
            onChange={(e) => {
              if (
                e.target.value === form.password &&
                e.target.value.length > 0
              ) {
                setMatchPass(true);
              } else {
                setMatchPass(false);
              }
              setForm({ ...form, confPassword: e.target.value });
            }}
          />
          <label
            htmlFor="password"
            className="text-quaternary font-bold peer-focus:text-secondary w-full sm:w-1/2"
          >
            Confirm Password
          </label>
        </span>
        <span className="flex justify-end items-end w-full ">
          <label className="hidden sm:block sm:w-1/2"></label>
          <button
            type="submit"
            className="bg-gradient-to-tl from-secondary to-tertiary h-10 w-full rounded-md text-white font-bold shadow-md hover:shadow-sm drop-shadow-md"
            disabled={loading ? true : false}
          >
            Join in
          </button>
        </span>
      </form>
      <Link className="mt-2" to={`/user/login`}>
        Already a member?{' '}
        <span className="text-secondary font-medium">Login</span>
      </Link>
    </div>
  );
};
export default SignupForm;
