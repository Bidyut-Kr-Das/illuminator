import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async () => {};
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
            className="bg-gradient-to-tl from-secondary to-tertiary h-10 w-full rounded-md text-white font-bold shadow-md hover:shadow-sm drop-shadow-md"
          >
            Log in
          </button>
        </span>
      </form>
      <Link className="mt-4" to={`/user/signup`}>
        Not a member yet?{' '}
        <span className="text-secondary font-medium">Join In</span>
      </Link>
    </div>
  );
};
export default LoginForm;
