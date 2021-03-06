import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Button, Col, Container, Modal, Row } from 'reactstrap';
import '../../assets/css/style.css';
import CallToAction from './components/Shared/CallToAction';
import Contact from './Contact';
import Diggiart from './Diggiart';
// import generic componenets
import Section from './HeroSection';
import Pris from './Pris';
import WorkProcess from './WorkProcess';

import './Apps.scss';
import '../../assets/css/materialdesignicons.min.css';
import '../../assets/css/colors/default.css';
import '../../assets/css/style2.css';

class Index extends Component {
  state = {
    isShownToast: false,
  };

  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const w = window.innerWidth;

    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
      document.getElementById('brandLogo').classList.add('brandSmall');
      document.getElementById('brandLogo').style =
        'max-height:80px;position:absolute';
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
      document.getElementById('brandLogo').classList.remove('brandSmall');
      if (w < 768) {
        document.getElementById('brandLogo').style =
          'max-height:80px;position:absolute';
      } else {
        document.getElementById('brandLogo').style =
          'max-height:auto;position:absolute';
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* CallToAction */}
        <CallToAction />

        {/* Counter */}
        <Diggiart />

        {/* WorkProcess */}
        <WorkProcess />

        {/* Barn */}
        <Pris />

        {/* Contact */}
        <Contact />

        <Container fluid className="cookies-bar">
          <Row>
            <Col md="12" id="yangu">
              <CookieConsent
                id="cookie"
                className="cookie"
                location="bottom"
                buttonText="X"
                cookieName="myAwesomeCookieName2"
                style={{ background: 'rgba(68,68,68,.8)' }}
                buttonStyle={{
                  display: 'inline-block',
                  background: 'rgba(0,0,0,0)',
                  color: '#fff',
                  fontSize: '18px',
                }}
                expires={150}
              >
                DiggiArt anv??nder cookies f??r att f??rb??ttra din upplevelse. Vi
                anv??nder dessa f??r analys??ndam??l. Genom att forts??tta anv??nda
                v??r webbplats godk??nner du v??r{' '}
                <a className="cookie-a" target="_blank" href="/cookie-consent">
                  anv??ndning av cookies
                </a>{' '}
              </CookieConsent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
