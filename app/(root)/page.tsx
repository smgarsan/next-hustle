import { Button } from "@/components/ui/button";
import Image from "next/image";

import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export default function Home() {
  console.log(sampleData);
  return (
    <>
      <ProductList title="Featured Products" data={sampleData.products} limit={4} />
    </>
  );
}
