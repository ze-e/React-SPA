import React, { Component } from "react";

import {
    portfolio_2,
    portfolio_3,
    portfolio_4,
    portfolio_5,
    portfolio_6,
    portfolio_7
} from "./images/images.js";

class Portfolio extends Component {
  render() {
    return (
<section id="portfolio" className="two">
    <div className="container">

        <header>
            <h2>Portfolio</h2>
        </header>

        <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
        egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
        Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
        fusce hendrerit lacus ridiculus.</p>

        <div className="row">
            <div className="col-4 col-12-mobile">
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_2} alt="" /></a>
                    <header>
                        <h3>Ipsum Feugiat</h3>
                    </header>
                </article>
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_3} alt="" /></a>
                    <header>
                        <h3>Rhoncus Semper</h3>
                    </header>
                </article>
            </div>
            <div className="col-4 col-12-mobile">
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_4} alt="" /></a>
                    <header>
                        <h3>Magna Nullam</h3>
                    </header>
                </article>
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_5} alt="" /></a>
                    <header>
                        <h3>Natoque Vitae</h3>
                    </header>
                </article>
            </div>
            <div className="col-4 col-12-mobile">
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_6} alt="" /></a>
                    <header>
                        <h3>Dolor Penatibus</h3>
                    </header>
                </article>
                <article className="item">
                    <a href="#" className="image fit"><img src={portfolio_7} alt="" /></a>
                    <header>
                        <h3>Orci Convallis</h3>
                    </header>
                </article>
            </div>
        </div>

    </div>
</section>
 );
  }
}
 
export default Portfolio;