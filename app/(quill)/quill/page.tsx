import { ApiSnippet } from "@/components/quill/api-snippet";
import { AuthorStrip } from "@/components/quill/author-strip";
import { QuillHero } from "@/components/quill/hero";
import { UseCaseStrip } from "@/components/quill/use-case-strip";
import { listGuides } from "@/lib/quill/guides";

export const metadata = {
  title: "Quill — Style guides for AI agents",
  description:
    "A curated library of author style guides, packaged as drop-in specs for your LLM.",
};

export default function QuillHome() {
  const featured = listGuides().slice(0, 5);
  return (
    <>
      <QuillHero />
      <AuthorStrip guides={featured} />
      <UseCaseStrip />
      <ApiSnippet />
    </>
  );
}
