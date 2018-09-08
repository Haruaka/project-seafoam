import React from 'react';
import'../styles/App.css';

import Header from "./Header"
import Footer from './Footer'

class AboutComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <p>Hello! This is the About Containter</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutComponent
