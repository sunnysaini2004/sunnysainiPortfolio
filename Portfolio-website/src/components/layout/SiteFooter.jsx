function SiteFooter() {
  // Keep the copyright year up to date automatically.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-silver-sage)/15 bg-(--color-obsidian) px-6 py-6 text-(--color-warm-ivory) sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        {/* Keep the footer minimal and give credit to the developer. */}
        <p className="text-sm text-(--color-warm-ivory)/65">
          Developed by{" "}
          <span className="font-semibold text-(--color-silver-sage)">
            Sunny Saini
          </span>
          <span aria-hidden="true" className="ml-1 text-(--color-moss-grey)">
            ✦
          </span>
        </p>

        <p className="text-xs text-(--color-warm-ivory)/45">
          © {currentYear} Sunny Saini. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
