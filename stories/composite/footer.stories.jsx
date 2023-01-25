import Footer from "@/components/composite/Footer";

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

export default {
  title: "Composite/Footer",
  component: Footer,
};

export const FooterComponent = () => (
  <Footer
    account={account}
    exploreArkane={exploreArkane}
    getInTouch={getInTouch}
  />
);
