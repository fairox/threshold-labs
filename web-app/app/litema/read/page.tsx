import { FlipBook } from "@/components/litema/FlipBook";
import { LITEMA_BOOK_CONTENT } from "@/lib/data/book-content";

export default function LitemaReaderPage() {
    return <FlipBook pages={LITEMA_BOOK_CONTENT} />;
}
