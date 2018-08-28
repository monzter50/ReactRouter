import React, { Component } from 'react';
import Layout from '../layout/Layout';
import './Home.css';
class Home extends Component {
  render() {
    return (
          <section className="container">
            <div className="shape-two">
                <span className="shape-two__text">Using before & after</span>

            </div>

          <div className="shape-two-desc">
              <div className="shape-container">
                  hola guapo
              </div>
          </div>
              <div className="shape-three-desc">
                  <div className="shape-container2">
                      hola guapo2
                  </div>
              </div>
              <div className="shape-four-desc">
                  <div className="shape-container3">
                      hola guapo3
                  </div>
              </div>
          </section>

    );
  }
}

export default Home;