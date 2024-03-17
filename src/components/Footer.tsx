// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4 md:p-12 bg-gradient-to-tl from-secondary to-tertiary flex flex-col gap-4">
        <h2 className="w-full">
          <img
            src="/Illuminator.svg"
            alt="Illuminator"
            className="mx-auto w-60 md:w-80"
            draggable="false"
          />
        </h2>
        <div className="w-full bg-primary h-[0.15rem]">{/* Underline */}</div>
        <div className="flex gap-20 sm:gap-80 justify-evenly">
          <span className="flex flex-col gap-4 font-poppins w-full">
            <h3 className="font-bold text-2xl text-white tracking-wide">
              <span className="text-primary">Reach</span> Us
            </h3>
            <div className="flex flex-col gap-4 text-white text-sm sm:text-base">
              <div className="flex sm:items-center justify-start gap-4 flex-col sm:flex-row items-start ">
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
              <div className="flex sm:items-center justify-start gap-4 flex-col sm:flex-row items-start ">
                <a
                  href="https://maps.app.goo.gl/ZA46hYv9AJukGaTg7"
                  target="_blank"
                  className="h-5 aspect-square"
                >
                  <img
                    src="/icons/email.svg"
                    alt="Call"
                    draggable="false"
                    className="mt-1 h-full w-full"
                  />
                </a>
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
              <div className="flex sm:items-center justify-start gap-4 flex-col sm:flex-row items-start ">
                <a
                  href="https://maps.app.goo.gl/ZA46hYv9AJukGaTg7"
                  target="_blank"
                  className="h-5 aspect-square"
                >
                  <img
                    src="/icons/location.svg"
                    alt="Call"
                    draggable="false"
                    className="mt-1 h-full w-full"
                  />
                </a>
                <h3 className="tracking-wider">
                  <span>
                    Madral Rd, Finga Para, madral, Joychandital, Bhatpara, West
                    Bengal 743126
                  </span>
                </h3>
              </div>
            </div>
          </span>
          <span className="flex flex-col gap-4 w-full">
            <h3 className="font-bold sm:font-semibold text-2xl  tracking-wide text-primary">
              Company
            </h3>
            <ul className="text-white flex flex-col gap-4">
              <li>About</li>
              <a href={`/#contact`}>
                <li>Contact</li>
              </a>
              <li>Faq</li>
            </ul>
          </span>
        </div>
      </footer>
      <h3 className="bg-quaternary w-full text-primary font-poppins text-center py-1 ">
        &copy; 2024 Illuminator. All rights reserved by Das Enterprise.
      </h3>
    </>
  );
};
export default Footer;
