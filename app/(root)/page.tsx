import { Button } from "@/components/ui/button";
import Image from "next/image";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList title="Featured Products" data={latestProducts} />
    </>
  );
}
