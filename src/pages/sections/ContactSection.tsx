import ContactForm from '../../components/ContactForm';

const ContactSection = () => {
  return (
    <section className="py-20 px-2 md:px-24 font-poppins flex flex-col gap-6">
      <div className="text-center w-full flex flex-col gap-4 select-none">
        <h2 className="font-kobe text-4xl font-bold ">
          <span className="text-secondary">Contact</span> Us
        </h2>
        <h3 className="tracking-wider">
          Any question or remarks? Just write us a message!
        </h3>
      </div>
      <div className="w-full flex xl:flex-row flex-col p-4 h-auto  bg-secondary rounded-lg text-white relative gap-8 md:gap-0">
        <section className="xl:w-[60%] p-8 bg-quaternary flex flex-col rounded-lg relative  justify-between gap-12 xl:gap-0 overflow-hidden">
          <div className="flex flex-col gap-2">
            <h2 className="font-kobe text-2xl font-bold ">
              Contact Information
            </h2>
            <h6 className="text-sm">Say something to start a live chat!</h6>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center justify-start gap-4">
              <img src="/icons/call.svg" alt="Call" draggable="false" />
              <h3 className="tracking-wider">
                +91{' '}
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText('9474326458');
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
                    navigator.clipboard.writeText('ckdas2011@gmail.com');
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
          <div className="flex w-full justify-center xl:justify-start gap-6">
            <a href="" className="p-1 bg-white rounded-full">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="" className="p-1 bg-white rounded-full">
              <img src="/icons/instagram.svg" alt="facebook" />
            </a>
          </div>
          <i className="aspect-square bg-white/30 h-48 -bottom-16 -right-16 rounded-full absolute"></i>

          <i className="aspect-square bg-white/30 h-24 bottom-12 right-12 rounded-full absolute"></i>
        </section>
        <section className="h-full w-full p-2 md:p-8">
          <ContactForm />
        </section>
      </div>
    </section>
  );
};
export default ContactSection;
