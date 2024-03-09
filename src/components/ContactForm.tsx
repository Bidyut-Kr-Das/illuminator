const ContactForm = () => {
  return (
    <form action="" className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <span className="flex flex-col w-full gap-4">
          <label htmlFor="firstName" className="text-primary">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="off"
            className="outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
          />
        </span>
        <span className="flex flex-col w-full gap-4">
          <label htmlFor="lastName" className="text-primary">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="off"
            className="outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
          />
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="flex flex-col w-full gap-4">
          <label htmlFor="email" className="text-primary">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            className="outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
          />
        </span>
        <span className="flex flex-col w-full gap-4">
          <label htmlFor="phoneNumber" className="text-primary">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            className="outline-none bg-transparent border-b-2 border-secondary text-secondary w-full"
            required
          />
        </span>
      </div>
      <h2 className="text-primary font-bold">Select Subject?</h2>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col gap-1 w-full">
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rGeneral"
              autoComplete="off"
              className="ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
            />
            <label htmlFor="rGeneral" className="text-primary cursor-pointer">
              General Inquiries
            </label>
          </span>
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rProduct"
              autoComplete="off"
              className="ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
            />
            <label htmlFor="rProduct" className="text-primary cursor-pointer">
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
              className="ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
            />
            <label htmlFor="rShipping" className="text-primary cursor-pointer">
              Shipping Inquiries
            </label>
          </span>
          <span className="flex flex-row w-full gap-4 items-center justify-start">
            <input
              type="radio"
              name="reason"
              id="rOrder"
              autoComplete="off"
              className="ouline-none bg-transparent border-none w-4 h-4 accent-secondary cursor-pointer"
              required
            />
            <label htmlFor="rOrder" className="text-primary cursor-pointer">
              Order Inquiries
            </label>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-primary">Message</h2>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message..."
          className="bg-transparent border-b-2 border-secondary w-full resize-none outline-none text-secondary"
        ></textarea>
      </div>
      <button
        className="py-1 px-4 bg-white w-full md:w-72 h-12 text-secondary rounded-full shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black/50"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};
export default ContactForm;
