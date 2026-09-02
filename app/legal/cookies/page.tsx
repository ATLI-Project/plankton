import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Cookies" };

export default function Cookies() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookies" dek="We keep this minimal." />
      <section className="container-prose pb-24 text-navy/80 space-y-6 leading-relaxed">
        <p>
          This site uses a small number of first-party cookies to remember your preferences (for example, whether you have dismissed the newsletter banner). We do not use third-party advertising cookies.
        </p>
        <p>
          If analytics is enabled, it is cookieless. You can block or delete cookies in your browser settings without affecting your ability to use the site.
        </p>
      </section>
    </>
  );
}
