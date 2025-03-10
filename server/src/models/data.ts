export const newsData = [
  [
    "Intrest rates in the banks have reduced",
    "3 men arrested for stealing mobile phones from a mall shop",
  ],
  [
    "Imported Gold has been smuggled by unknown",
    "Heavy rains to continue in coastal areas for the next 2 days",
    "Gold import taxes has been raised",
  ],
  [
    "The Development of a safe vaccine against COVID-19 hsa boosted confidence in stock market and has led to profit booking in metals",
    "The new Iphone is a massive hit in the market",
    "The popular social media platform gets banned for violating privacy policies",
  ],
];

export const hintsData = [
  [
    "When interest rates are reduced, borrowing costs for mortgages and loans decrease. This makes buying real estate more affordable for consumers, leading to increased demand and higher real estate prices.",
  ],
  [
    "Smuggling of gold can lead to a supply shortage in the legal market, potentially driving up gold prices.",
  ],
  [
    "Positive news about vaccine development boosts market confidence, leading to increased investment in stocks and profit booking in metals.",
  ],
];

//  gold, stocks , bitcoin, real estate, bank deposit

export const multiplier = {
  1: [1.01, 5.00, -9.00, 5.50, 0.2],
  2: [7.07, -0.97, 1.99, -0.98, 0.5],
  3: [-2.0, 4.03, 1.05, 0.5, 0.5],
} as { [key: number]: number[] };