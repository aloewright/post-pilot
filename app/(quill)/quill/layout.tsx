import { Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { QuillFooter } from "@/components/quill/footer";
import { QuillNav } from "@/components/quill/nav";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export default function QuillLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${instrumentSerif.variable} quill-canvas min-h-screen`}
      style={{
        // scope the display serif to Quill only
        ["--strand-type-display-serif" as string]:
          "var(--font-instrument-serif), 'Source Serif 4', Georgia, serif",
      }}
    >
      <QuillNav />
      <main>{children}</main>
      <QuillFooter />
    </div>
  );
}
