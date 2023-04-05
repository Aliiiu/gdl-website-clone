export const TestimonyCard = ({ image_url, name, porfolio, testimonial }) => (
  <div>
    <div className="mb-[1.5rem]">
      <div className="rounded-[0.5rem] bg-[rgba(255,255,255,var(--tw-bg-opacity))] bg-opacity-[0.4] testi">
        <div className="relative h-[5rem] rounded-tl-[0.5rem] rounded-tr-[0.5rem] border-b-0 border-[rgba(162,166,168,var(--tw-border-opacity))] border-opacity-[0.2] bg-opacity-[1] bg-[rgba(255,255,255,var(--tw-bg-opacity))] pt-[1.25rem]">
          <div className="relative z-10 mx-auto mb-[-1.25rem] rounded-[9999px]">
            <img src={image_url} className="img-testi" />
          </div>
        </div>
        <div className="mt-[0.75rem] shadow rounded-br-[0.5rem] rounded-bl-[0.5rem] bg-[rgba(255,255,255,var(--tw-bg-opacity))] bg-opacity-[0.2] py-[4rem] px-[2rem] pb-[2rem] testimony">
          <h1 className="text-center">{testimonial}</h1>
          <div className="text-right">
            <h2>{name}</h2>
            <h3>{porfolio}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);
