import CardSlider, { ProductCard } from "../components/CardSlider";

const LandingPage = () => {
  return (
    <main className=" bg-secondary">
      <section className="py-40 w-full bg-primar font-lovelo text-5xl text-center md:text-7xl xl:text-9xl font-bold overflow-hidden ">
        <span className="textShadow relative flex flex-col">
          Illuminator
          <span className="textShadowReflection absolute -bottom-8 left-0">
            Illuminator
          </span>
        </span>
        <span className="font-kobe text-2xl md:text-3xl capitalize font-light">
          Let us lightup your life
        </span>
      </section>
      <section className="px-12 pt-8">
        <CardSlider title="Newly Launched">
          <ProductCard
            image="./test.jpg"
            title="This is a new Product"
            price="7999"
          />
          <ProductCard
            image="./test.jpg"
            title="This is a new Product"
            price="7999"
          />
          <ProductCard
            image="./test.jpg"
            title="This is a new Product"
            price="7999"
          />
        </CardSlider>
      </section>
    </main>
  );
};
export default LandingPage;
