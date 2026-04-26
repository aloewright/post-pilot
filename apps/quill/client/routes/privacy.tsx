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
        <p>
          This Privacy Policy explains how Aloe Wright ("Aloe Wright", "we",
          "us", or "our") collects, uses, and shares information when you
          use Post Pilot — its website, API, and associated services
          (collectively, the "Service"). By using the Service, you agree to
          the practices described here.
        </p>

        <h2 className="pp-lede mt-12 text-2xl">1. Information we collect</h2>
        <p>
          <strong>Account information.</strong> When you create an account,
          we collect identity information from your sign-in provider —
          typically your email address and a provider-issued user ID — via
          better-auth.
        </p>
        <p>
          <strong>Usage data.</strong> We collect basic request metadata —
          the path, response status, latency, and IP-based country — to
          operate, secure, and improve the Service. Some of this is logged
          at the platform layer by Cloudflare.
        </p>
        <p>
          <strong>Inputs.</strong> When you call the apply endpoint
          (<code>/v1/apply</code>) or other generation features, we receive
          the input text you submit. Inputs are routed through Cloudflare
          AI Gateway with <code>cf-aig-zdr: true</code> set, which signals
          that the upstream model provider should not retain the request
          for training purposes.
        </p>
        <p>
          <strong>Cookies.</strong> We set a single signed, HTTP-only auth
          session cookie via better-auth. We do not use third-party
          tracking cookies or advertising pixels.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">2. How we use information</h2>
        <ul>
          <li>To provide, operate, and improve the Service.</li>
          <li>
            To authenticate you and protect against abuse, fraud, and
            security incidents.
          </li>
          <li>
            To respond to your requests, including support inquiries.
          </li>
          <li>To comply with applicable law.</li>
        </ul>
        <p>
          We do not train models on your Inputs. We do not sell your
          personal information. We do not use your Inputs to develop new
          features for other users.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">3. Sharing and processors</h2>
        <p>
          We share information only with the third-party processors that
          help us run the Service:
        </p>
        <ul>
          <li>
            <strong>Cloudflare</strong> — hosting (Workers), database (D1),
            object storage (R2), key-value (KV), and AI Gateway.
          </li>
          <li>
            <strong>Model providers</strong> (e.g. OpenAI, Anthropic,
            Cloudflare Workers AI) — accessed exclusively through AI Gateway
            dynamic routes, never via direct provider SDKs from our
            application code. Inputs sent through the gateway are subject
            to the providers' policies; we set <code>cf-aig-zdr: true</code>{" "}
            so providers do not retain Inputs for training.
          </li>
          <li>
            <strong>Sign-in providers</strong> — used at the moment you
            authenticate. We receive only what better-auth surfaces (email
            and provider user ID).
          </li>
        </ul>
        <p>
          We may disclose information when required by law, in response to
          valid legal process, or to protect the rights, property, or
          safety of Aloe Wright, our users, or the public.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">4. Data retention</h2>
        <p>
          Account information is kept for as long as your account is active
          and for a reasonable period afterward to satisfy legal and
          operational obligations. Request logs follow Cloudflare's
          standard retention. Inputs to the apply endpoint are not stored
          beyond the duration of the request, except as needed for short-
          term debugging or abuse investigation.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">5. Security</h2>
        <p>
          We use reasonable administrative, technical, and physical
          safeguards designed to protect your information, including
          transport-level encryption (HTTPS), signed session cookies, and
          access controls on operational data. No system is perfectly
          secure; we cannot guarantee that information will never be
          accessed without authorization.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">6. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access,
          correct, delete, or export your personal information, and to
          object to or restrict certain processing. To exercise these
          rights, contact us at the address below. We will respond within
          the timeframes required by applicable law.
        </p>
        <p>
          California residents have rights under the California Consumer
          Privacy Act (CCPA) including the right to know what categories
          of personal information we collect, to delete it, and to
          non-discrimination for exercising these rights. We do not "sell"
          personal information as defined under the CCPA.
        </p>
        <p>
          Residents of the European Economic Area, the United Kingdom, and
          Switzerland have rights under the GDPR and equivalent laws,
          including the right to lodge a complaint with a supervisory
          authority.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">7. International transfers</h2>
        <p>
          The Service runs on Cloudflare's global edge network. Information
          may be processed in countries other than the one you live in.
          Where required, we rely on appropriate safeguards (such as
          standard contractual clauses) for cross-border transfers.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">8. Children's privacy</h2>
        <p>
          The Service is not directed to children under 13, and we do not
          knowingly collect personal information from children under 13. If
          you believe a child under 13 has provided personal information,
          contact us and we will take appropriate steps to delete it.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">9. Changes</h2>
        <p>
          We may update this Policy from time to time. Material changes
          will be posted here with an updated date. Your continued use of
          the Service after changes take effect constitutes acceptance.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">10. Contact</h2>
        <p>
          Aloe Wright — privacy questions and requests can be sent to{" "}
          <a href="mailto:pleasewritemealetter@gmail.com">
            pleasewritemealetter@gmail.com
          </a>
          .
        </p>

        <Rule />
      </Column>
    </section>
  );
}
