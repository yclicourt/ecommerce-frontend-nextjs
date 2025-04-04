import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Product } from "@/models/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  handleRemoveProduct: (id: number) => Promise<void>;
}

export function ProductCard({
  product,
  handleRemoveProduct,
}: ProductCardProps) {
  return (
    <Card key={product.id}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-gray-500 font-bold text-sm">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          width={600}
          height={400}
          className="w-full h-auto"
          alt="Product image"
          priority
        ></Image>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className=" flex justify-between">
        <Button className="mt-5">Add Cart</Button>
        <Button
          className="mt-5"
          variant={"destructive"}
          onClick={() => handleRemoveProduct(product.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
