import React from 'react';
import PropTypes from 'prop-types';

import '../styles/main.scss'

const Layout = ({children}) => <div className="content">{children}</div>

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;