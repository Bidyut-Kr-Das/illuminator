import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <main className="bg-gradient-to-bl from-secondary to-tertiary py-20 px-3 md:px-8 lg:px-20">
      <section className="flex ">
        <section className="hidden lg:flex py-10 w-2/5 xl:w-full bg-primar font-lovelo text-5xl text-center md:text-5xl xl:text-5xl font-bold overflow-hidden justify-center items-center">
          <span className="textShadow relative flex flex-col xl:flex-row">
            <span>I</span>
            <span>l</span>
            <span>l</span>
            <span>u</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
          </span>
        </section>
        <section className="bg-primary rounded-lg w-full py-8 px-4 sm:px-8">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
export default User;
