import Footer from "../composite/Footer";
import NavBar from "../composite/NavBar";

const account = [
  { value: "Account", href: "#" },
  { value: "Profile", href: "#" },
  { value: "Billing", href: "#" },
];

const exploreArkane = [
  { value: "Home", href: "#" },
  { value: "Features", href: "#" },
  { value: "Pricing", href: "#" },
  { value: "FAQs", href: "#" },
  { value: "About", href: "#" },
];

const getInTouch = [
  { value: "Careers", href: "#" },
  { value: "Contact", href: "#" },
  { value: "Email Us", href: "#" },
  { value: "Schedule a Meeting", href: "#" },
];

export default function Layout(props) {
  return (
    <div className='bg-white min-vh-100 d-flex flex-column justify-content-between'>
      <NavBar />
      <main>{props.children}</main>
      <Footer
        account={account}
        exploreArkane={exploreArkane}
        getInTouch={getInTouch}
      />
    </div>
  );
}
