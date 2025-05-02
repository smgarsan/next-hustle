import { APP_NAME } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="p-5 flex justify-center items-center">
                { currentYear } { APP_NAME }. Diseñado con ❤️ por Tiago García.
            </div>
        </footer>
    )
}