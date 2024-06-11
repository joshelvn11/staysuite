import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCurrencySymbol, getPriceTypeText } from "@/utils/currencyUtils";
import Link from "next/link";

interface AccommodationCardProps {
  key: number;
  slug: string;
  name: string;
  price: number;
  priceType: number;
  excerpt: string;
  currency: "USD" | "GBP" | "ZAR" | "EUR" | "JPY" | "AUD" | "CAD";
}

const AccommodationCard: React.FC<AccommodationCardProps> = (props) => {
  let priceTypeText: string = getPriceTypeText(props.priceType);

  const href = `/accommodation/${props.slug}`;

  return (
    <Card className="flex flex-col">
      <img
        className="rounded-t-xl border max-h-52 w-full object-cover"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-53452882/original/ab01d765-00ef-482c-97b7-b16aa3c25973.jpeg?im_w=1200"
      ></img>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex grow">
        <p>{props.excerpt}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <p className="text-lg font-semibold">
            {getCurrencySymbol(props.currency)}
            {props.price} {priceTypeText}
          </p>
          <Button asChild>
            <Link href={href}>View</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccommodationCard;
