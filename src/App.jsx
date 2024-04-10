import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import Mid from "./sections/Mid";
import Business from "./sections/Business";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative overflow-x-hidden bg-[#08246c] ">
      <Nav />

      <section className="xl:padding-l  wide:padding-r padding-b  ">
        <Hero />
      </section>
      <section className="xl:padding-l bg-white wide:padding-r padding-b ">
        <Mid />
      </section>
      <section className="xl:padding-l bg-white wide:padding-r padding-b padding-t ">
        <Business />
      </section>
      <section className="xl:padding-l bg-white wide:padding-r ">
        <Footer />
      </section>
    </main>
  );
}

export default App;
