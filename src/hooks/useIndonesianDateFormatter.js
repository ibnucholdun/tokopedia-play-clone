import { useState, useEffect } from "react";

export default function useIndonesianDateFormatter() {
  const [formatter, setFormatter] = useState(null);

  useEffect(() => {
    const indonesianDateFormatter = new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormatter(indonesianDateFormatter);
  }, []);

  return formatter;
}
