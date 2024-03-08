import CardSlider, { ProductCard } from "../components/CardSlider";
import CTASection from "./sections/CTASection";

const LandingPage = () => {
  return (
    <main className=" bg-primary">
      <section className="py-40 w-full bg-primar font-lovelo text-5xl text-center md:text-7xl xl:text-9xl font-bold overflow-hidden ">
        <span className="textShadow relative flex flex-col">Illuminator</span>
        <span className="font-kobe text-2xl md:text-3xl capitalize font-semibold">
          Let us lightup your Brand
        </span>
      </section>
      <section className="px-4 md:px-12 pt-8 pb-8 bg-secondary ">
        <CardSlider title="Newly Launched">
          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />
        </CardSlider>
      </section>
      {/* CTA section */}
      <CTASection />
      <section className="px-4 md:px-12 pt-8 pb-8 bg-secondary ">
        <CardSlider title="Trending">
          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />
        </CardSlider>
      </section>
      <section className="px-4 md:px-12 pt-8 pb-8 bg-secondary ">
        <CardSlider title="Top picks">
          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />

          <ProductCard
            image="/images/noImage.jpg"
            title="This is a new Product"
            price="7999"
          />
        </CardSlider>
      </section>
    </main>
  );
};
export default LandingPage;
