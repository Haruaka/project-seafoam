import React from 'react';
import '../styles/App.css';

class SkillSet extends React.Component {
    render() {
        return (
            <div className="skillSet">
                <p className="icon"><i className="fa fa-code"></i></p>
                <h2>Developer</h2>
                <hr style={{marginBottom: "10px"}}/>

                <h3>Languages</h3>
                <p>Javascript, HTML/CSS & Java</p>

                <h3>Frameworks</h3>
                <p>ReactJS, React Native</p>

                <h3>Tools</h3>
                <p>Github, Netbeans, Visual Studio Code</p>
            </div>
        )
    }
}

export default SkillSet;
