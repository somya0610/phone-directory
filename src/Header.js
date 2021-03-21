import React, { Component } from 'react';
import './Header.css';

const Header = function (props1) {
    const headerStyle = {textAlign:"center", padding:20, background:'#000', color:'#fff', textTransform:"uppercase"};
    return (
        <div className="header">
            {props1.heading}
        </div>

        // <div style={{textAlign:"center", padding:20, background:'#000', color:'#fff', textTransform:"uppercase"}}>
        //     Phone Directory
        // </div>

        // <div style={headerStyle}>
        //     Phone Directory
        // </div>
    )
}

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header;