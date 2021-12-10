// Layout.js

import React, { Component } from 'react';

class Layout extends Component {

    render() {
        return (
            <div id="layoutMain">
                {this.props.children}
            </div>
        );
    }
}

export default Layout;