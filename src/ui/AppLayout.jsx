import PropTypes from 'prop-types'

import Header from "../features/partials/Header";
import Footer from "../features/partials/Footer";


function AppLayout({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.any
}



export default AppLayout;