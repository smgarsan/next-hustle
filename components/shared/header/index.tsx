import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
export default function Header() {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex justify-between items-center">
            <div>
                <Link href="/" className="flex justify-start items-center">
                    {/* <Image src="next.svg" alt={`${APP_NAME} Logo`} width={48} height={48} /> */}
                    <span className="text-2xl font-bold">
                        {APP_NAME}
                    </span>
                </Link>
            </div>
            <Menu />
        </div>
    </header>
  );
}