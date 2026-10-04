import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Cookies" };

export default function Cookies() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookies" dek="We keep this minimal." />
      <section className="container-prose pb-24 text-ink/80 space-y-6">
        <p className="leading-relaxed">
          This site does not use advertising or third-party tracking cookies. If we use analytics, it is a cookieless, privacy-respecting service.
        </p>
        <p className="leading-relaxed">
          You can block or delete cookies in your browser settings without affecting your use of the site.
        </p>
      </section>
    </>
  );
}
