import Image from "next/image";

const MiniCard = ({imgSrc, title}) => {
  return (
    <div className="w-[350px] h-[350px] relative">
      <Image
        src={imgSrc}
        alt=""
        fill
        className="object-cover z-2"
      />

      <div className="relative z-1 bg-black/20 h-[100%] flex flex-col justify-end items-center gap-4">
        <h3 className="text-white text-3xl font-bold">{title}</h3>
        <div className="pb-6 text-sm flex gap-2">
          <a
            href="#"
            className="bg-white px-4 py-2 rounded-full font-bold uppercase"
          >
            Ladies
          </a>
          <a
            href="#"
            className="bg-white px-4 py-2 rounded-full font-bold uppercase"
          >
            Men
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
