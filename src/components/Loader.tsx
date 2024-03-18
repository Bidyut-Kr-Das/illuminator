import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);
  return (
    <>
      {loading ? (
        <div className="loader absolute left-0 w-screen h-screen font-lovelo text-6xl text-center flex justify-center items-center backdrop-blur-lg z-50">
          <HashLoader color="#000000" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
