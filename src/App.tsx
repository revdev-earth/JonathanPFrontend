import Header from "Sections/Header";
import Section1 from "Sections/1";
import Section2 from "Sections/2";
import Section3 from "Sections/3";
import Section4 from "Sections/4";
import Section5 from "Sections/5";
import Section6 from "Sections/6";
import Footer from "Sections/Footer";

function App() {
  return (
    <>
      <div className="m-auto max-w-[1440px]">
      <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  );
}

export default App;
