import React, { useEffect, useState } from "react";

import {
  Accommodation,
  getAccommodationList,
} from "@/api/accommodationService";

interface AccommodationDetailProps {
  slug: string;
}

const AccommodationDetail: React.FC<AccommodationDetailProps> = (props) => {
  const [accommodations, setAccommodations] = useState<Accommodation | null>(
    null
  );

  useEffect(() => {
    const fetchAccommodation = async () => {
      const data = await getAccommodationList;
    };
  });

  return;
};
