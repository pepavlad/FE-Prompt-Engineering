import { PricingCard } from "./pricing-card";

const pricingPlans = [
  {
    id: 1,
    plan: "Standard",
    price: 100,
    features: ["50,000 requests", "4 contributors", "Up to 3 GB storage space"],
  },
  {
    id: 2,
    plan: "Pro",
    price: 200,
    features: [
      "100,000 requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    id: 3,
    plan: "Expert",
    price: 500,
    features: [
      "200,000 requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
  },
];

export const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-20">Pricing</h1>
      <div className="flex items-center justify-center w-full sm:flex-row flex-col">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
};
