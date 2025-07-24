import { FaArrowRightLong } from "react-icons/fa6";

const ArticleCard = ({ image, category, title, description, link = "#" }) => {
  return (
    <div className="w-full sm:w-80 h-[22rem] flex flex-col items-center relative">
      {/* Top Image */}
      <div className="w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content Card */}
      <div className="w-[90%] h-48 p-3 bg-zinc-50 absolute bottom-4 shadow-lg rounded-md flex flex-col gap-3">
        <h5 className="bg-[#e6fbef] text-[#027a48] font-semibold text-xs w-fit py-1 px-2 rounded-md">
          {category}
        </h5>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-[#475467]">{description}</p>
        <a
          href={link}
          className="text-[#e85353] flex items-center gap-3 cursor-pointer"
        >
          <h4 className="font-semibold">Know More</h4>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
