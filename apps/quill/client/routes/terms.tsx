import { createFileRoute } from "@tanstack/react-router";
import { Column, Kicker, Lede, Rule, Standfirst } from "../components/editorial";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms — Post Pilot" }] }),
});

function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Legal</Kicker>
        <Lede as="h1" size="lg">
          Terms of Service
        </Lede>
        <Standfirst>Last updated: 2026-04-26.</Standfirst>
      </div>

      <Column>
        <h2 className="pp-lede mt-0 text-2xl">1. Acceptance</h2>
        <p>
          By accessing Post Pilot — its website, API, or any associated
          service — you agree to these Terms of Service. If you do not
          agree, do not use the service.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">2. License to use</h2>
        <p>
          Post Pilot grants you a non-exclusive, non-transferable, revocable
          license to use the service for the purpose of generating prose
          with your own LLM applications. Excessive automated use that
          degrades the service for others is grounds for revocation.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">3. Acceptable use</h2>
        <ul>
          <li>
            Don't scrape the catalog wholesale to republish as a competing
            product.
          </li>
          <li>Don't use the service to generate unlawful content.</li>
          <li>
            Don't attempt to bypass rate limits, auth, or other technical
            controls.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">4. Intellectual property</h2>
        <p>
          Each guide is a curator's interpretation of a voice — written
          analysis and structured constraints, not a reproduction of the
          underlying author's text. Guides ship with a{" "}
          <code>copyright_posture</code> field that documents this for each
          entry. The catalog as a compilation is © Post Pilot; individual
          guide content is © the curator named on the entry.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">5. No warranty</h2>
        <p>
          The service is provided "as is" without warranty of any kind.
          Generated output is not guaranteed to match any specific quality
          bar — the eval rubric is a measurement tool, not a guarantee.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Post Pilot is not liable
          for indirect, incidental, special, consequential, or punitive
          damages arising out of your use of the service.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">7. Changes to these terms</h2>
        <p>
          We may update these terms. Material changes will be posted here
          with an updated date.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">8. Contact</h2>
        <p>
          Reach out via the contact link in your account. Or email the
          curator listed on a specific guide for content questions.
        </p>

        <Rule />
      </Column>
    </section>
  );
}
