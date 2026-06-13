const templates = [
  { title: "Product Store", tag: "Best for affiliates", tint: "from-[#ecdcff] to-[#f5ecff]" },
  { title: "UGC Hub", tag: "For content packs", tint: "from-[#f0e4ff] to-[#f8f0ff]" },
  { title: "Course Stack", tag: "For educators", tint: "from-[#ead8ff] to-[#f7ecff]" },
  { title: "Digital Box", tag: "For creators", tint: "from-[#efe3ff] to-[#f8efff]" },
  { title: "Beauty Shelf", tag: "For reviews", tint: "from-[#f2e9ff] to-[#fbf6ff]" },
  { title: "Gear List", tag: "For tech creators", tint: "from-[#e9d8ff] to-[#f6ecff]" },
];

const featureCards = [
  { title: "Curated collections", text: "Group similar products into shoppable lists with one click." },
  { title: "Smart link analytics", text: "Track clicks, saves and product engagement per recommendation." },
  { title: "Custom storefront", text: "Tune banner, colors and product layout without code." },
  { title: "Multiple platforms", text: "Import links from Amazon, Myntra, Flipkart and more." },
];

const partnerBrands = ["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Nykaa", "Zilo"];
const affiliateSteps = [
  { title: "Import", text: "Bring links from stores and social posts." },
  { title: "Build", text: "Create sections, tags and product cards." },
  { title: "Share", text: "Publish one smart link across all channels." },
  { title: "Earn", text: "Track engagement and optimize every list." },
];

export default function HowItWorks() {
  return (
    <>
      <section id="templates" className="pt-8 sm:pt-10">
        <div className="container-shell rounded-[28px] border border-[#E5E7EB] bg-white p-5 shadow-[0_18px_36px_rgba(17,24,39,0.06)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A2BE2]">Templates</p>
              <h2 className="mt-1 text-2xl font-bold text-[#111827] sm:text-3xl" style={{ fontFamily: "var(--font-space)" }}>
                Build Any Kind of Storefront
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#6B7280]">Pick a ready template and transform it into your creator storefront in a few minutes.</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <article key={template.title} className="rounded-2xl border border-[#E5E7EB] bg-[#F8F8FC] p-4">
                <div className={`h-24 rounded-xl bg-gradient-to-br ${template.tint}`} />
                <h3 className="mt-3 text-sm font-semibold text-[#111827]">{template.title}</h3>
                <p className="mt-1 text-xs text-[#6B7280]">{template.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="pt-8 sm:pt-10">
        <div className="container-shell rounded-[28px] border border-[#E5E7EB] bg-white p-5 shadow-[0_18px_36px_rgba(17,24,39,0.06)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A2BE2]">How It Works</p>
              <h2 className="mt-1 text-2xl font-bold text-[#111827] sm:text-3xl" style={{ fontFamily: "var(--font-space)" }}>
                Everything You Need to Share, Grow and Earn
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#6B7280]">Paste links, organize your lists, and publish a polished storefront that your audience can shop from.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[#E5E7EB] bg-[#F8F8FC] p-4">
                <h3 className="text-sm font-semibold text-[#111827]">{feature.title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#6B7280]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="pt-8 sm:pt-10">
        <div className="container-shell rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_26px_rgba(17,24,39,0.05)] sm:p-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Import From Any Store</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {partnerBrands.map((brand) => (
              <div key={brand} className="rounded-xl border border-[#E5E7EB] bg-[#F8F8FC] px-3 py-3 text-center text-xs font-semibold text-[#111827]">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="affiliates" className="pt-8 sm:pt-10">
        <div className="container-shell rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_12px_26px_rgba(17,24,39,0.05)] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A2BE2]">Affiliate Workflow</p>
          <h3 className="mt-1 text-xl font-bold text-[#111827]" style={{ fontFamily: "var(--font-space)" }}>
            Import from Any Store. Build Any Cart.
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {affiliateSteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#E5E7EB] bg-[#F8F8FC] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A2BE2]">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
