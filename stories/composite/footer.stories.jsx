import Footer from "@/components/composite/Footer";

const links = {
  results: [
    {
      section: "account",
      url: "/profile",
      displayText: "Profile",
    },
    {
      section: "explore",
      url: "/about",
      displayText: "About",
    },
    {
      section: "explore",
      url: "/features",
      displayText: "Features",
    },
    {
      section: "contact",
      url: "/email",
      displayText: "Email Us",
    },
    {
      section: "explore",
      url: "/faq",
      displayText: "FAQ",
    },
    {
      section: "account",
      url: "/billing",
      displayText: "Billing",
    },
    {
      section: "explore",
      url: "/",
      displayText: "Home",
    },
    {
      section: "explore",
      url: "/pricing",
      displayText: "Pricing",
    },
    {
      section: "contact",
      url: "/contact",
      displayText: "Contact Us",
    },
    {
      section: "account",
      url: "/account",
      displayText: "Account",
    },
    {
      section: "contact",
      url: "/meeting",
      displayText: "Schedule a Meeting",
    },
    {
      section: "contact",
      url: "/careers",
      displayText: "Careers",
    },
  ],
};

export default {
  title: "Composite/Footer",
  component: Footer,
};

export const FooterComponent = () => <Footer links={links} />;
