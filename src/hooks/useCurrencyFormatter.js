import { useEffect, useState } from "react";

export default function useCurrencyFormatter() {
  const [formatter, setFormatter] = useState(null);

  useEffect(() => {
    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    setFormatter(currencyFormatter);
  }, []);

  return formatter;
}
