import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type SignupFormFields = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confPassword: string;
  gender: 'Male' | 'Female' | 'Other' | '';
};

const SignupForm = () => {
  const [form, setForm] = useState<SignupFormFields>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confPassword: '',
    gender: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [matchPass, setMatchPass] = useState<boolean>(false);

  const handleSubmit = async () => {
    // console.log(form);
    if (!matchPass) return;
    if (
      form.name.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.phoneNumber.trim().length === 0 ||
      form.password.trim().length === 0 ||
      form.confPassword.trim().length === 0 ||
      form.email.indexOf(`@`) === -1
    )
      return;
    console.log(form);
    const response = await axios.post(
      `https://illuminatorbackend.up.railway.app/api/v1/users/signup`,
      {
        ...form,
      }
    );
    console.log(response.data);
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
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            className="shadow-md peer focus:text-secondary text-quaternary/60 outline-none bg-[#f3f3f3]  w-full h-10 px-2"
            required
            value={form.phoneNumber}
            onChange={(e) => {
              if (e.target.value.length > 10) return;
              setForm({ ...form, phoneNumber: e.target.value.trim() });
            }}
          />
          <label
            htmlFor="phoneNumber"
            className="text-quaternary font-bold peer-focus:text-secondary w-full sm:w-1/2"
          >
            Phone Number
          </label>
        </span>
        <span className="flex flex-col sm:flex-row w-full relative justify-center sm:items-center sm:gap-0 gap-2">
          <label className="text-quaternary font-bold peer-focus:text-secondary w-1/2">
            Gender
          </label>
          <div className="w-full flex flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row gap-4">
            <span className="flex flex-row w-full gap-2 items-center justify-start">
              <input
                type="radio"
                name="gender"
                id="Male"
                autoComplete="off"
                className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
                required
                value="Male"
                onClick={() => {
                  setForm({ ...form, gender: 'Male' });
                }}
              />
              <label
                htmlFor="Male"
                className="text-quaternary font-bold peer-checked:text-secondary"
              >
                Male
              </label>
            </span>
            <span className="flex flex-row w-full gap-2 items-center justify-start">
              <input
                type="radio"
                name="gender"
                id="Female"
                autoComplete="off"
                className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
                required
                value="Female"
                onClick={() => {
                  setForm({ ...form, gender: 'Female' });
                }}
              />
              <label
                htmlFor="Female"
                className="text-quaternary font-bold peer-checked:text-secondary"
              >
                Female
              </label>
            </span>
            <span className="flex flex-row w-full gap-2 items-center justify-start">
              <input
                type="radio"
                name="gender"
                id="Others"
                autoComplete="off"
                className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
                required
                value="Other"
                onClick={() => {
                  setForm({ ...form, gender: 'Other' });
                }}
              />
              <label
                htmlFor="Others"
                className="text-quaternary font-bold peer-checked:text-secondary"
              >
                Others
              </label>
            </span>
          </div>
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
