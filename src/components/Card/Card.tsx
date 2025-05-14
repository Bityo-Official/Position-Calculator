import type { CardProps } from "@/types/Card/Card";

const Card = (props: CardProps) => {
  return (
    <div className="rounded-lg p-5 bg-white">
      <p className="text-3xl font-bold leading-12 text-[#1C1C1C]">
        {props.title}
      </p>
      <p className="text-xl font-normal leading-4 text-neutral-400">
        {props.description}
      </p>
      <div className="mt-5">{props.children}</div>
    </div>
  );
};

export default Card;
