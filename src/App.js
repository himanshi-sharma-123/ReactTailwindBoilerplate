import Business from "./components/Business";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Table />
      <Business />
      <Payment />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
