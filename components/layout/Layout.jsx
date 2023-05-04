import FooterKontent from "@/components/layout/FooterKontent";
import NavBar from "@/components/layout/NavBar";
// TODO: Footer links should be converted back to props.links once everything is working

/**
 * Layout is a top level wrapper that will wrap every page in `/pages`.
 */
export default function Layout(props) {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <NavBar />
      <main>{props.children}</main>
      <FooterKontent links={props.links} />
    </div>
  );
}
