import Footer from "../composite/Footer";
import NavBar from "../composite/NavBar";

export default function Layout(props) {
  return (
    <div className='min-vh-100 d-flex flex-column justify-content-between bg-brand-rev text-brand'>
      <NavBar />
      <main>{props.children}</main>
      <Footer links={props.links} />
    </div>
  );
}
