import React from 'react';
import '../styles/App.css';

class SkillSet extends React.Component {
    render() {
        return (
            <div className="skillSet">
                <p className="icon"><i className="fa fa-pencil"></i></p>
                <h2>Designer</h2>
                <hr style={{marginBottom: "10px"}}/>

                <h3>Specialty</h3>
                <p>Presentations, Print Materials, <br/> UI/UX, Web</p>

                <h3>Programs</h3>
                <ul>
                <li>Adobe Illustrator</li>
                <li>Adobe Indesign</li>
                <li>Adobe Photoshop</li>
                <li>Adobe XD</li>
                <li>Squarespace, Weebly</li>
                </ul>
            </div>
        )
    }
}

export default SkillSet;
