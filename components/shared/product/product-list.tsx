import ProductCard from "./product-card";
import { Product } from "@/types";

export default function ProductList({ title, data, limit }: { title?: string, data: Product[], limit?: number }) {
    const limitedData = limit ? data.slice(0, limit) : data;

    return (
        <div className="my-10">
            <h2 className="font-bold text-2xl lg:text-3xl">
                {title}
            </h2>
            {
                data.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            limitedData.map((product: Product) => (
                                <ProductCard key={product.slug} product={product} />
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <p>No se encontraron productos.</p>
                    </div>
                )
            }
        </div>
    );
}
