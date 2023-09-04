import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 md:lg:h-full md:lg:w-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ml-10 pl-5 py-5
       ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex">{demo}</div>
      <div className="mx-auto max-w-md">
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
