import CardSlider, { ProductCard } from '../../components/CardSlider';

const ShowcaseSection = ({ url, title }: { url: string; title: string }) => {
  return (
    <section className="px-4 md:px-12 pt-8 pb-8 bg-secondary ">
      <CardSlider title={title}>
        <ProductCard
          image="/images/noImage.jpg"
          title={`This is a new Product${url}`}
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
  );
};
export default ShowcaseSection;
