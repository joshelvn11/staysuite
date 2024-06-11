const CURRENCY_SYMBOL_MAP = {
  USD: "$",
  GBP: "£",
  ZAR: "R",
  EUR: "€",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
} as const;

export function getCurrencySymbol<String>(
  currencyCode: keyof typeof CURRENCY_SYMBOL_MAP
) {
  return CURRENCY_SYMBOL_MAP[currencyCode];
}

export function getPriceTypeText<String>(priceType: number) {
  let priceTypeText: string = "";

  switch (priceType) {
    case 0:
      priceTypeText = "per night";
      break;
  }

  return priceTypeText;
}
