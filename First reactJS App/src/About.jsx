import React from 'react';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
    var name = "Aarya Shah";
    var contactStyle = { color: 'black', backgroundColor: 'lightblue' };
    return (
        <>
            <h1>about</h1>
            Name: {name} <br />
            <p style={contactStyle}>about page.</p>
        </>
    );
    }
}

export default About;