import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { MenuIcon, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Menu() {
    return (
        <div className="flex items-center justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-sm gap-2">
                <ModeToggle />
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart />
                    </Link>
                </Button>
                <Button asChild variant="default">
                    <Link href="/sign-in">
                        <UserIcon /> Iniciar sesión
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start p-5">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle /> 
                        <Button asChild variant="ghost">
                            <Link href="/cart">
                                <ShoppingCart /> Carrito
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}