const ContactSection = () => {
  return (
    <section className="py-20 px-4 md:px-24 font-poppins">
      <div className="text-center w-full flex flex-col gap-4 select-none textsla">
        <h2 className="font-kobe text-4xl font-bold ">
          <span className="text-secondary">Contact</span> Us
        </h2>
        <h3 className="tracking-wider">
          Any question or remarks? Just write us a message!
        </h3>
      </div>
      <div className="w-full flex md:flex-row flex-col p-4 justify-evenly h-auto bg-secondary rounded-lg text-white">
        <section className="h-full sm:w-[60%] p-8 bg-quaternary flex flex-col rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="font-kobe text-2xl font-bold ">
              Contact Information
            </h2>
            <h6 className="text-sm">Say something to start a live chat!</h6>
          </div>
          <div className="flex flex-col gap-4 my-16">
            <div className="flex items-center justify-start gap-4">
              <img src="/icons/call.svg" alt="Call" draggable="false" />
              <h3 className="tracking-wider">
                +91{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("9474326458");
                  }}
                >
                  9474326458
                </span>
              </h3>
            </div>
            <div className="flex items-center justify-start gap-4">
              <img src="/icons/email.svg" alt="Call" draggable="false" />
              <h3 className="tracking-wider">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    // console.log(e.target.innertext);
                    navigator.clipboard.writeText("ckdas2011@gmail.com");
                  }}
                >
                  ckdas2011@gmail.com
                </span>
              </h3>
            </div>
            <div className="flex items-start justify-start gap-4">
              <img
                src="/icons/location.svg"
                alt="Call"
                draggable="false"
                className="mt-1"
              />
              <h3 className="tracking-wider">
                <span>
                  Kiranvilla, 25 east joychanditala, madral, Kankinara, North 24
                  Parganas, West Bengal, India. Pin: 743126
                </span>
              </h3>
            </div>
          </div>
          <div></div>
        </section>
        <section className="h-full w-full">.</section>
      </div>
    </section>
  );
};
export default ContactSection;
