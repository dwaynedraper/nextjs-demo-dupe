import Footer from "../composite/Footer";
import NavBar from "../composite/NavBar";

export default function Layout(props) {
  return (
    <div className='bg-white'>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
