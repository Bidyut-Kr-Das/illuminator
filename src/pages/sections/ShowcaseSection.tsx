import { twMerge } from 'tailwind-merge';
import CardSlider, { ProductCard } from '../../components/CardSlider';

const ShowcaseSection = ({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(`px-4 md:px-12 pt-8 pb-8 bg-secondary`, className)}
    >
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
