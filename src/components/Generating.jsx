import { moleculeicon } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-8 h-8 mr-4 rounded-full" src={moleculeicon} alt="Nano Particles" />
      Infinite molecules and beyond
    </div>
  );
};

export default Generating;
