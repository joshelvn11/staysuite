import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AccommodationCardProps {
  key: number;
  slug: string;
  name: string;
  price: number;
  priceType: number;
  excerpt: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = (props) => {
  let priceTypeText: String = "";
  switch (props.priceType) {
    case 0:
      priceTypeText = "per night";
      break;
  }

  return (
    <Card>
      <img
        className="rounded-t-xl border max-h-52 w-full object-cover"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-53452882/original/ab01d765-00ef-482c-97b7-b16aa3c25973.jpeg?im_w=1200"
      ></img>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.excerpt}</p>
      </CardContent>
      <CardFooter>
        <div>
          <p className="text-lg font-semibold">
            {props.price} {priceTypeText}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccommodationCard;
