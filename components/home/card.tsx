import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
}: {
  title: string;
  description: string;
  demo: ReactNode;
}) {
  return (
    <div
      className={`flex-1 relative w-full lg:w-1/3 lg:h-fit lg:min-h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl drop-shadow-lg lg:ml-10 pl-5 pt-10`}
    >
      <div className="flex px-10">{demo}</div>
      <div className="mx-auto py-5 px-10">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold  md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="text-xs mt-2 leading-normal text-gray-500">
          <Balancer>
            {description}
          </Balancer>
        </div>
      </div>
    </div>
  );
}
