import { Link } from "react-router-dom";

export default function FaqTeaser() {
  return (
    <section className="px-6 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl py-4 border-t-2 border-b-2 border-bgColor p-0 md:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-darkYellow">
          FAQ
        </p>

        <h2 className="max-w-screen-lg mx-auto">
          Heb je vragen?
        </h2>

        <p className="mt-4 max-w-screen-lg mx-auto body-text">
          Lees meer over bestellen, levering, versheid en detoxopties op onze&nbsp;
          <span><Link
          to="/faq"
          className="underline"
        >
        FAQ-pagina.
        </Link></span>
        </p>

        
      </div>
    </section>
  );
}