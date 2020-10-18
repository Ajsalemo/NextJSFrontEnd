import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function HeroImage({ children, path }) {
  return (
    <div
      className="-top-16 h-screen"
      style={{
        backgroundImage: `url(${path})`,
        backgroundPosition: `center`,
      }}
    >
      <Navbar />
      <Footer />
    </div>
  );
}
