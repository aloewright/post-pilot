import { Suspense } from "react";
import { PlaygroundClient } from "@/components/quill/playground-client";
import { listGuides } from "@/lib/quill/guides";

export const metadata = {
  title: "Playground — Quill",
  description: "Test any Quill guide against any input, with a live rubric.",
};

export default function PlaygroundPage() {
  const guides = listGuides();

  return (
    <Suspense fallback={null}>
      <PlaygroundClient guides={guides} />
    </Suspense>
  );
}
