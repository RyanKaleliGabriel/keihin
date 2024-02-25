import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
