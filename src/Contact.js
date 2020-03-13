import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
<section id="contact" className="four">
<div className="container">

    <header>
        <h2>Contact</h2>
    </header>

    <p>Elementum sem parturient nulla quam placerat viverra
    mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
    donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
    orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

<ul className="icons">
    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
    <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
    <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
</ul>

</div>
</section>

    );
  }
}
 
export default Contact;