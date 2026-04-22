import { Library } from "@/components/quill/library";
import { Kicker, Lede, Standfirst } from "@/components/quill/editorial";
import { listGuides } from "@/lib/quill/guides";

export const metadata = {
  title: "Library — Quill",
  description: "Browse the full library of Quill author style guides.",
};

export default function LibraryPage() {
  const guides = listGuides();
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Library</Kicker>
        <Lede as="h1" size="lg">
          The Library
        </Lede>
        <Standfirst className="max-w-[52ch]">
          {guides.length} guides. Filter by era, use case, or voice. Every
          official guide ships with a system prompt, a structured spec, and an
          eval rubric.
        </Standfirst>
      </div>

      <Library guides={guides} />
    </section>
  );
}
