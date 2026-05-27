import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { brandEase } from "@/lib/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const rights = [
  { title: "Right of access", desc: "You can ask me what personal data I hold about you." },
  { title: "Right to rectification", desc: "You can ask me to correct inaccurate data." },
  { title: "Right to erasure", desc: 'You can ask me to delete your data (the "right to be forgotten").' },
  { title: "Right to restrict processing", desc: "You can ask me to limit how I use your data." },
  { title: "Right to data portability", desc: "You can request a copy of your data in a portable format." },
  { title: "Right to object", desc: "You can object to my processing of your data." },
];

const dataRows = [
  { data: "Your name", purpose: "To address you personally in my reply", basis: "Legitimate interest (Art. 6(1)(f) GDPR)" },
  { data: "Your email address", purpose: "To send you a reply to your message", basis: "Legitimate interest (Art. 6(1)(f) GDPR)" },
  { data: "Your message", purpose: "To understand and respond to your enquiry", basis: "Legitimate interest (Art. 6(1)(f) GDPR)" },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="section-container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: brandEase }}
        >
          {/* Back link — mirrors ProjectPage */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back home
          </Link>

          {/* Eyebrow + title */}
          <p className="font-mono text-xs text-muted-foreground bg-accent py-1 rounded-md mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: 27 May 2026</p>

          {/* Body copy — same prose classes as ProjectPage article */}
          <article className="prose prose-slate max-w-[65ch] prose-headings:tracking-tight prose-headings:font-semibold">

            <h2>Who I am</h2>
            <p>
              This website is a personal portfolio operated by <strong>Rimo Cabales</strong>.
              If you have any questions about how I handle your data, you can reach me at{" "}
              <a href="mailto:rimo.cabales@protonmail.com">rimo.cabales@protonmail.com</a>.
            </p>

            <hr />

            <h2>What data I collect and why</h2>
            <p>When you submit the contact form on this website, I collect the following personal data:</p>

            {/* Table — sits naturally inside prose via Tailwind Typography */}
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Purpose</th>
                  <th>Legal basis</th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row) => (
                  <tr key={row.data}>
                    <td>{row.data}</td>
                    <td>{row.purpose}</td>
                    <td>{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>I collect this data solely to respond to your enquiry. I will not use it for any other purpose.</p>

            <hr />

            <h2>How long I keep your data</h2>
            <p>
              I will retain your contact details and message only for as long as necessary to respond
              to your enquiry, and for a reasonable period afterwards — typically no longer than 12
              months — after which it will be deleted.
            </p>

            <hr />

            <h2>Who I share your data with</h2>
            <p>I do not share, sell, rent, or otherwise disclose your personal data to any third parties.</p>
            <p>
              Your data is stored within my email account and any systems used to receive contact
              form submissions. My email provider processes this data on my behalf as a data
              processor; however, I do not actively pass your information to any other person or
              organisation.
            </p>

            <hr />

            <h2>How I store and protect your data</h2>
            <p>
              Your data is stored securely within my email inbox. I take reasonable precautions to
              protect it from unauthorised access, loss, or disclosure. No automated databases or
              additional storage systems are used beyond what is needed to deliver your message to me.
            </p>

            <hr />

            <h2>Cookies and tracking</h2>
            <p>
              This contact form does not use cookies, tracking pixels, or analytics tools to process
              your personal data. If this changes, this policy will be updated accordingly.
            </p>

            <hr />

            <h2>Your rights under GDPR</h2>
            <p>As a data subject, you have the following rights:</p>
            <ul>
              {rights.map(({ title, desc }) => (
                <li key={title}>
                  <strong>{title}</strong> — {desc}
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, please contact me at{" "}
              <a href="mailto:rimo.cabales@protonmail.com">rimo.cabales@protonmail.com</a>.
              I will respond within one calendar month.
            </p>

            <hr />

            <h2>Right to complain</h2>
            <p>
              If you believe I have handled your personal data unlawfully, you have the right to
              lodge a complaint with the UK supervisory authority:
            </p>

            {/* Callout block — uses same accent/border pattern found across the project */}
            <div className="not-prose rounded-xl border border-border bg-accent p-5 my-4">
              <p className="text-sm leading-relaxed">
                <strong>Information Commissioner's Office (ICO)</strong>
                <br />
                Website:{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  ico.org.uk
                </a>
                <br />
                Helpline: 0303 123 1113
              </p>
            </div>

            <hr />

            <h2>Changes to this policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated date at the top.
            </p>

            <hr />

            <h2>Contact</h2>
            <p>
              If you have any questions about this policy or how I handle your data, please get in
              touch at{" "}
              <a href="mailto:rimo.cabales@protonmail.com">rimo.cabales@protonmail.com</a>.
            </p>

          </article>
        </motion.div>
      </main>
      <SiteFooter />
    </>
  );
};

export default PrivacyPolicy;
