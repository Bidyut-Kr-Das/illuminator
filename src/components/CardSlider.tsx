import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { twMerge } from 'tailwind-merge';

type ProductCardProp = {
  image: string;
  title: string;
  price: string;
  cardColor?: string;
};
export const ProductCard = (props: ProductCardProp) => {
  return (
    <>
      <section
        className={twMerge(
          `h-80 w-64 mx-auto font-kobe font-extrabold p-3 rounded-lg shadow-lg mb-3 drop-shadow-lg bg-slate-200`,
          `${props.cardColor}`
        )}
      >
        <div className="h-48">
          <img
            src={props.image}
            alt={props.title}
            className="h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 items-center relative text-left w-full mt-4">
          <h1 className="w-full text-lg">{props.title}</h1>
          <p className=" bg-quaternary -ml-12 pl-3 w-[90%] h-8 leading-7 text-white">
            Rs: {props.price}/-
          </p>
          <span
            className={twMerge(
              `h-8 aspect-square top-[57%] absolute rotate-45 right-6 bg-slate-200`,
              `${props.cardColor}`
            )}
          ></span>
        </div>
      </section>
    </>
  );
};

const CardSlider = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '100px',
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
          className: 'center',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
          className: 'center',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1520,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
          className: 'center',
          // slidesToShow: 2
        },
      },
    ],
  };
  return (
    <>
      <h1 className="text-3xl font-semibold font-kobe  tracking-normal md:tracking-wider text-primary ">
        <span className="underline underline-offset-2 font-bold">{title}</span>{' '}
        &rarr;
      </h1>
      <section className="mx-auto pt-8">
        <Slider {...settings} className="flex justify-center items-center pb-4">
          {children}
        </Slider>
      </section>
    </>
  );
};

export default CardSlider;
//Css for slider arrow and all
// .slick-next {
//   top: -3rem;
//   right: 3rem;
//   width: 3rem;
//   height: auto;
// }
// .slick-prev {
//   top: -3rem;
//   /* right: 3rem; */
//   left: 60rem;
//   width: 3rem;
//   height: auto;
// }
// .slick-next::before,
// .slick-prev::before {
//   font-family: 'KodeMono';
//   font-size: 2rem;
//   color: white;
//   background: #99bc85;
//   width: 100%;
//   height: 100%;
//   border-radius: 9999px;
//   display: block;
//   padding: 0.5rem 1rem;
//   opacity: 0.9;
// }
// .slick-next::before {
//   content: '>';
// }
// .slick-prev::before {
//   content: '<';
// }
