import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ProductPrice from "./product-price";

export default function ProductCard({ product }: { product: any }) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/products/${product.slug}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={300}
                        height={300}
                        priority={true}
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/products/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex items-center justify-between">
                    <p>{ product.rating } Estrellas</p>
                    {
                        product.stock > 0 ? (
                            <ProductPrice value={product.price} />
                        ) : (
                            <p className="text-muted-foreground">Sin stock</p>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
}