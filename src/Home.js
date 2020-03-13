import React, { Component } from "react";

import {
  NavLink
} from "react-router-dom";

 
class Home extends Component {
  render() {
    return (
    <section id="top" className="one dark cover">
        <div className="container">

            <header>
                <h2 className="alt">Hi! Welcome to My Portfolio!</h2>
                <p>Ligula scelerisque justo sem accumsan diam quis<br />
                vitae natoque dictum sollicitudin elementum.</p>
            </header>

            <footer>
            <NavLink className="button scrolly" to="/portfolio">Portfolio</NavLink>
            </footer>

        </div>
    </section>
    );
  }
}
 
export default Home;