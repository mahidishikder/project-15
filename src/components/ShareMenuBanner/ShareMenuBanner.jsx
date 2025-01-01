import { Parallax } from 'react-parallax';

function ShareMenuBanner({ title, heading, img }) {
  return (
    <Parallax
        blur={{ min: -40, max: 40 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div
      className="hero lg:h-[800px] md:h-[600px] sm:h-[400px] h-[380px]"
   
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center mt-20">
        <div className=" bg-black bg-opacity-50 rounded-lg lg:h-[340px] lg:w-[800px] md:w-[600px] sm:h-[200px] h-[170px] w-[350px] sm:w-[500px]  md:h-[280px] flex  flex-col justify-center items-center ">
          <h1 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">{heading}</h1>
          <p className="mb-5">{title}</p>
        </div>
      </div>
    </div>
    </Parallax>
  );
}

export default ShareMenuBanner;
