import React from "react";

type PricingCardProps = {
  plan: string;
  price: number;
  features: string[];
  isFeatured?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`w-full flex flex-col items-center justify-center border py-6 border-gray-200 shadow-sm outline-none transition 
        sm:hover:shadow-2xl sm:focus:shadow-2xl max-w-[300px]
        ${
          isFeatured
            ? "bg-slate-700 text-white py-18"
            : "bg-white text-slate-700 py-12"
        }
        `}
    >
      <h3 className="mb-2 text-lg font-semibold text-center ">{plan}</h3>
      <p className="mb-4 text-6xl font-bold text-center ">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(price)}
      </p>
      <div className="text-sm flex flex-col w-full items-center justify-center mb-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center border-b border-gray-200 w-full py-3 first:border-t"
          >
            <span className="text-center text-md font-bold">{feature}</span>
          </div>
        ))}
      </div>
      <button
        className={`px-4 py-2 text-sm uppercase transition 
          focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer font-bold
          ${
            isFeatured
              ? " text-white  focus-visible:ring-white"
              : " text-slate-700  focus-visible:ring-slate-700"
          }`}
      >
        Subscribe
      </button>
    </div>
  );
};
