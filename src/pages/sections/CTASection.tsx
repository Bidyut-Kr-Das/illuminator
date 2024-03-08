import { useState } from "react";
type formType = {
  field: boolean;
  valid: boolean;
  text: string;
  submit: boolean;
};

const CTASection = () => {
  //   const [field, setField] = useState<boolean>(false);
  //   const [valid, setValid] = useState<boolean>(false);
  //   const [text, setText] = useState<string>("");
  //   const [submit, setSubmit] = useState<boolean>(false);
  const [form, setForm] = useState<formType>({
    field: false,
    valid: false,
    text: "",
    submit: false
  });
  return (
    <section className="bg-primary py-20 px-4 md:px-40 flex justify-center">
      <div className=" py-8 px-4 w-full rounded-lg shadow-lg shadow-black/20 bg-gradient-to-tl from-[#BFD8AF] to-[#99BC85] flex gap-4 flex-col">
        <h3 className="text-center font-poppins font-semibold text-3xl capitalize">
          Want us to lightup your personal brand/Shop ?
        </h3>
        <p className="w-full md:text-center text-center">
          We take orders with custom size and names that is perfect to lightup
          cool brands like yours. We also take orders for custom neon signs.
        </p>
        <form
          className="flex md:flex-row flex-col gap-4 justify-evenly items-center"
          onSubmit={e => {
            e.preventDefault();
            if (form.valid)
              setForm({
                ...form,
                text: "Thank you for your request, we will contact you soon.",
                submit: true
              });
            else
              setForm({
                ...form,
                text: "Please provide a valid phone number",
                submit: false
              });
          }}
        >
          <div
            className={`flex flex-col w-full ${form.field ? `block` : `hidden`} gap-4`}
          >
            <input
              type="number"
              name="phoneNumberCTA"
              id="phoneNumberCTA"
              required
              onChange={e => {
                e.target.value.length === 10
                  ? setForm({ ...form, valid: true })
                  : setForm({
                      ...form,
                      valid: false
                    });
              }}
              autoComplete="off"
              className={`${form.field && !form.submit ? `block` : `hidden`} outline-none px-2 h-12 rounded-full border-[#99BC85] border-2 tracking-wider text-lg text-[#99BC85] font-bold w-full placeholder:font-bold`}
              placeholder="Provide your contact Number"
              pattern="[0-9]{10}"
            />
            <div
              className={`${form.valid && form.submit ? `text-black font-bold text-center` : `text-red-500`}
              `}
            >
              {form.text}
            </div>
          </div>
          <button
            onClick={() => setForm({ ...form, field: true })}
            className={`h-12 bg-quaternary  rounded-full shadow-md shadow-black/20 w-full sm:w-96 hover:shadow-black/30 select-none cursor-pointer font-bold text-white tracking-wider text-lg mx-auto ${form.submit ? `hidden` : `block`}`}
            type={`${form.field ? `submit` : `button`}`}
          >
            Request a Call
          </button>
        </form>
      </div>
    </section>
  );
};
export default CTASection;
