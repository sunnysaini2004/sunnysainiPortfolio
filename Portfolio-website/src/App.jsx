
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";

import Hero from "./sections/Hero";
import About from "./sections/About";
import SelectedWork from "./sections/SelectedWork";
import Tools from "./sections/Tools";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Keep the page sections in the same order as the navigation. */}
        <Hero />
        <About />
        <SelectedWork />
        <Tools />
        <Experience />
        <Contact />
      </main>

      {/* Keep the footer at the bottom of the page. */}
      <SiteFooter />
    </>
  );
}

export default App;
