import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./productForm";

function ProductNewPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductNewPage;
