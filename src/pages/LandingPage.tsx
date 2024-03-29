import CTASection from './sections/CTASection';
import ContactSection from './sections/ContactSection';
import ShowcaseSection from './sections/ShowcaseSection';

const LandingPage = () => {
  return (
    <main className=" bg-primary">
      <section className="py-40 w-full bg-primar font-lovelo text-5xl text-center md:text-7xl xl:text-9xl font-bold overflow-hidden bg-gradient-to-bl from-secondary to-tertiary">
        <span className="textShadow relative flex flex-col">Illuminator</span>
        <span className="font-kobe text-2xl md:text-3xl capitalize font-semibold">
          Let us lightup your Brand
        </span>
      </section>
      {/* This showcase section for newly launched */}
      <ShowcaseSection url="" title="Newly Launched" className="bg-primary" />

      {/* CTA section */}
      <CTASection />

      {/* Two card section for trending and top picks*/}
      <ShowcaseSection url="" title="Trending" className="bg-primary" />
      <ShowcaseSection url="" title="Top Picks" className="bg-primary" />
      {/* Contact section */}
      <ContactSection />
    </main>
  );
};
export default LandingPage;
