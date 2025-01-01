import { Parallax } from 'react-parallax';

function ShareBanner({ title, heading, img }) {
  return (
    <Parallax
      blur={{ min: -40, max: 40 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero min-h-[300px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] w-full"
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center mt-20 mb-10">
          <div className="px-6  bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center w-full max-w-4xl py-6 sm:py-16 mx-auto">
            <h1 className="mb-5 text-xl font-bold md:text-2xl lg:text-3xl">{heading}</h1>
            <p className="mb-5">{title}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default ShareBanner;
