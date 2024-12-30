import featured from '../../../assets/home/featured.jpg';
import ShareHeading from '../../../components/ShareHeading/ShareHeading';
import './Featured.css';

function Featured() {
  return (
    <div
      className="relative px-6 py-16 md:px-10 lg:px-32 lg:py-28 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className="mb-16">
          <p className="text-center text-yellow-500 text-sm md:text-lg">
            ---Check it out---
          </p>
          <h2 className="text-center text-white/80 text-2xl md:text-3xl lg:text-4xl border-y-4 w-full md:w-[350px] mx-auto mt-4 mb-12 py-5">
            FROM OUR MENU
          </h2>
        </div>

        {/* Content Section */}
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Image */}
            <img
              className="w-full md:w-[400px] lg:w-[568px] h-auto rounded-md"
              src={featured}
              alt="Featured"
            />

            {/* Text Section */}
            <div>
              <p className="text-sm md:text-lg text-white/70">March 20, 2023</p>
              <p className="text-sm md:text-lg text-white/70">
                WHERE CAN I GET SOME?
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white/70 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                Eaque repellat recusandae ad laudantium tempore consequatur
                consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="mt-8 text-white/80 border-b-4 font-medium hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-white/80">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
