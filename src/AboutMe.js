import React, { Component } from "react";

import { featured } from "./images/images.js";
 
class AboutMe extends Component {
  render() {
    return (

<section id="about" className="three">
    <div className="container">

        <header>
            <h2>About Me</h2>
        </header>

        <a href="#" className="image featured"><img src={featured} alt="" /></a>

        <p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
        ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
        laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
        parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
        dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
        ornare iaculis.</p>

    </div>
</section>
 );
  }
}


export default AboutMe;