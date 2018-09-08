import React from 'react';
import'../styles/App.css';

import Header from "./Header"
import Footer from './Footer'

class GalleryComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <p>Hello! This is the Gallery Containter</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default GalleryComponent
