import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-4xl font-bold">{ APP_NAME }</h1>
            <p className="text-muted-foreground">La página que estás buscando no existe ☠️. </p>
            <Button asChild variant="outline">
                <Link href="/">
                    <ArrowLeft /> Volver al inicio
                </Link>
            </Button>
        </div>
    );
}