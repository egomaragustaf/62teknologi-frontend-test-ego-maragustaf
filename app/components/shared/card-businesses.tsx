import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components";

interface Props {
  business: {
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    rating: number;
    price: string;
  };
}

export function BusinessCard({ business }: Props) {
  return (
    <Card>
      <CardHeader>
        <img
          src={business.image_url}
          alt={business.alias}
          className="rounded-t-lg h-48 w-48 object-cover"
        />
      </CardHeader>

      <CardContent>
        <CardTitle>{business.name}</CardTitle>
        <CardDescription className="line-clamp-1">
          {business.alias}
        </CardDescription>
        <CardFooter>
          <div className="text-primary flex items-center justify-start gap-1">
            <span>Rating {business.rating}</span>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
