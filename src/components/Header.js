import React from 'react';
import'../styles/App.css';

import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
        )
    }
}
export default Header;
