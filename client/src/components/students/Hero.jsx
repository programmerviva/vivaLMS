import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-3xl relative font-bold text-gray-800 max-w-3xl mx-auto leading-tight">
        Unlock Your Potential with Courses Tailored Just for You!
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="md:block hidden text-sm text-gray-500 max-w-2xl mx-auto leading-[21px]">
        Learn from the best educators around the world. Access top-notch courses crafted by industry
        experts. Study at your own pace with lifetime access to all materials.
      </p>
      <p className="md:hidden text-sm text-gray-500 max-w-sm mx-auto leading-[21px]">
        Join a community of learners and elevate your skills.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
