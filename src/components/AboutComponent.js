import React from 'react';
import'../styles/App.css';

import Header from "./Header";
import Footer from './Footer';
import Designer from './DesignerSet';
import Developer from './DeveloperSet';

class AboutComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    <ul>
                        <li>
                            <Designer/>
                        </li>
                        <li>
                            <Developer/>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutComponent
