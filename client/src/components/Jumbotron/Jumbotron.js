import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 text-center myText">Google Books Search</h1>
                <br></br>
                <h2 className="text-center myText">Search for books using the Google API.</h2>
            </div>
        </div>
    )
}

export default Jumbotron;