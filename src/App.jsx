import Content from "./content";
import DynamicNavbar from "./DynamicNavbar.jsx";
import Header from "./Header.jsx";
import Navbar from "./Navbar";

export const App = () => {
  return (
    <>
      <DynamicNavbar />
      <Header />
      <Content />
    </>
  );
};
