import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  ProductPage } from "./new/product-page";

function ProductNewPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductPage />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductNewPage;
