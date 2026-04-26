import { createFileRoute } from "@tanstack/react-router";
import { Column, Kicker, Lede, Rule, Standfirst } from "../components/editorial";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({ meta: [{ title: "Privacy — Post Pilot" }] }),
});

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Legal</Kicker>
        <Lede as="h1" size="lg">
          Privacy Policy
        </Lede>
        <Standfirst>Last updated: 2026-04-26.</Standfirst>
      </div>

      <Column>
        <h2 className="pp-lede mt-0 text-2xl">What we collect</h2>
        <ul>
          <li>
            Account identity, when you sign in (email + provider, via
            better-auth).
          </li>
          <li>
            Request metadata (path, status, latency) so we can keep the
            service running.
          </li>
          <li>
            For <code>/v1/apply</code> calls, the input text you submit. We
            route it through Cloudflare AI Gateway with{" "}
            <code>cf-aig-zdr: true</code> set, which means the upstream
            provider will not retain it for training.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">What we don't collect</h2>
        <ul>
          <li>
            We don't train models on your prompts. We don't ship them
            anywhere except the gateway path required to fulfill the
            request.
          </li>
          <li>
            We don't sell your data. There's no third-party advertising,
            tracking, or analytics SDK on this site beyond what Cloudflare
            provides at the platform level.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">Cookies</h2>
        <p>
          One auth session cookie set by better-auth, signed and HTTP-only.
          That's the whole list.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Retention</h2>
        <p>
          Account data lives until you delete your account. Request logs
          rotate per Cloudflare's standard retention.{" "}
          <code>/v1/apply</code> inputs are not stored beyond the duration
          of the request.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Third parties</h2>
        <ul>
          <li>
            <strong>Cloudflare</strong> — Workers, D1, AI Gateway. The
            service runs entirely on Cloudflare.
          </li>
          <li>
            <strong>LLM providers</strong> — OpenAI, Anthropic, Workers AI.
            Accessed via AI Gateway dynamic routes, never direct.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">Your rights</h2>
        <p>
          You can request access to or deletion of your account data at any
          time via the contact link in your account.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Changes</h2>
        <p>
          Material changes to this policy are posted here with an updated
          date.
        </p>

        <Rule />
      </Column>
    </section>
  );
}
