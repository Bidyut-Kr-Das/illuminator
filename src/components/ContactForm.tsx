import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    reason: '',
    message: '',
    submit: false,
  });

  const handleSubmit = () => {
    if (
      form.firstName.trim().length === 0 ||
      form.lastName.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.email.indexOf('@') === -1 ||
      form.phoneNumber.trim().length < 10 ||
      form.reason.trim().length === 0
    ) {
      setForm({ ...form, submit: false });
    } else {
      setForm({ ...form, submit: true });
      // console.log(form);
    }
    let formData: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      reason: string;
      message: string;
      submit?: boolean;
    };
    if (form.submit) {
      formData = { ...form };
      delete formData['submit'];
      console.log(formData);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        reason: '',
        message: '',
        submit: false,
      });
    }
    // post with this data `formData`
  };
  return (
    <form
      method="post"
      action=""
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <span className="flex flex-col-reverse w-full gap-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="off"
            className="outline-none bg-transparent border-b-2 border-secondary text-secondary w-full peer"
            required
            value={form.firstName}
            onChange={(e) => {
              setForm({ ...form, firstName: e.target.value });
            }}
          />
          <label
            htmlFor="firstName"
            className="text-quaternary font-bold peer-focus:text-secondary"
          >
            First Name
          </label>
        </span>
        <span className="flex flex-col-reverse w-full gap-4">
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="off"
            className="peer outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
            value={form.lastName}
            onChange={(e) => {
              setForm({ ...form, lastName: e.target.value });
            }}
          />
          <label
            htmlFor="lastName"
            className="text-quaternary font-bold peer-focus:text-secondary"
          >
            Last Name
          </label>
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="flex flex-col-reverse w-full gap-4">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            className="peer outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <label
            htmlFor="email"
            className="text-quaternary font-bold peer-focus:text-secondary"
          >
            Email
          </label>
        </span>
        <span className="flex flex-col-reverse w-full gap-4 relative">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            className="peer outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
            value={form.phoneNumber}
            onChange={(e) => {
              if (e.target.value.length > 10) return;
              setForm({ ...form, phoneNumber: e.target.value });
            }}
          />
          <label
            htmlFor="phoneNumber"
            className="text-quaternary font-bold peer-focus:text-secondary"
          >
            Phone Number
          </label>
        </span>
      </div>
      <h2 className="text-quaternary font-bold">Select Subject?</h2>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col gap-1 w-full">
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rGeneral"
              autoComplete="off"
              className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
              value="General Inquiries"
              onClick={() => {
                setForm({ ...form, reason: 'General Inquires' });
              }}
            />
            <label
              htmlFor="rGeneral"
              className="text-quaternary font-bold peer-checked:text-secondary"
            >
              General Inquiries
            </label>
          </span>
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rProduct"
              autoComplete="off"
              className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
              value="Product Inquiries"
              onClick={() => {
                setForm({ ...form, reason: 'Product Inquiries' });
              }}
            />
            <label
              htmlFor="rProduct"
              className="text-quaternary font-bold peer-checked:text-secondary"
            >
              Product Inquiries
            </label>
          </span>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rShipping"
              autoComplete="off"
              className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
              value="Shipping Inquiries"
              onClick={() => {
                setForm({ ...form, reason: 'Shipping Inquiries' });
              }}
            />
            <label
              htmlFor="rShipping"
              className="text-quaternary font-bold peer-checked:text-secondary"
            >
              Shipping Inquiries
            </label>
          </span>
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rOrder"
              autoComplete="off"
              className="peer ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
              value="Order Inquiries"
              onClick={() => {
                setForm({ ...form, reason: 'Order Inquiries' });
              }}
            />
            <label
              htmlFor="rOrder"
              className="text-quaternary font-bold peer-checked:text-secondary"
            >
              Order Inquiries
            </label>
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4">
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message..."
          className="peer bg-transparent border-b-2 border-secondary w-full resize-none outline-none text-secondary"
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
          }}
        ></textarea>
        <h2 className="text-quaternary font-bold peer-focus:text-secondary">
          Message
        </h2>
      </div>
      <button
        className="py-1 px-4 bg-white w-full md:w-72 h-12 text-secondary rounded-full shadow-black/50 font-bold shadow-md hover:shadow-lg hover:shadow-black/50"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};
export default ContactForm;
