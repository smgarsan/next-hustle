import { cn } from "@/lib/utils";

export default function ProductPrice({ value, className }: { value: number, className?: string }) {
    const stringValue = value.toFixed(2);
    const [integerPart, decimalPart] = stringValue.split('.');
    return (
        <p className={cn(className)}>
            {integerPart}
            <span>,{decimalPart}</span>
            <span> EUR</span>
        </p>
    );
}