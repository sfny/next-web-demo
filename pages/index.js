import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron className="text-light rounded-0" style={{
          backgroundColor: 'white',
          }}>
          <Container className="mt-2 mb-2">
            <h1 className="display-2 mb-3" style={{fontWeight: 300}}>
              <span style={{fontWeight: 600}}>
                <br className="v-block d-sm-none"/>
                Glean
              </span>
            </h1>
            <p className="lead mb-5">
              A Chat App for People Management
            </p>
            <style jsx>{`
              .display-2  {
                color: black;
              }
              .lead {
                font-size: 3em;
                color: black;
                opacity: 0.3;
              }
              @media (max-width: 767px) {
                .display-2 {
                  font-size: 3em;
                  margin-bottom: 1em;
                }
                .lead {
                  font-size: 1.5em;
                }
              }
            `}</style>
          </Container>
        </Jumbotron>
        <Container>
          <h2 className="text-center display-4 mt-5 mb-2">Features</h2>
          <Row className="pb-5">
            <Col xs="12" sm="4" className="pt-5">
              <h3 className="text-center mb-4">Sessions / Security</h3>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="https://expressjs.com">Express</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.npmjs.com/package/express-sessions">Express Sessions</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)">CSRF Tokens</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.owasp.org/index.php/HttpOnly">HTTP Only Cookies</a></ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h3 className="text-center mb-4">Authentication</h3>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="http://www.passportjs.org">Passport</a></ListGroupItem>
                <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">Email Sign In</a></Link></ListGroupItem>
                <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">oAuth (Facebook, Google, Twitter…)</a></Link></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://www.npmjs.com/package/next-auth">NextAuth</a></ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h4 className="text-center mb-4">CSS / SCSS</h4>
              <ListGroup>
                <ListGroupItem><a className="text-dark" href="https://getbootstrap.com">Bootstrap 4.0</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="http://reactstrap.github.io/">Reactstrap</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="https://ionicframework.com/docs/ionicons/">Ionicons</a></ListGroupItem>
                <ListGroupItem><a className="text-dark" href="http://sass-lang.com/">SASS</a></ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <h2 className="text-center display-4 mt-2 mb-5">Getting Started</h2>
          <p>
            <a href="https://github.com/zeit/next.js">Next.js</a> from <a href="https://zeit.co">Zeit</a> makes creating
            websites with React easy.
          </p>
          <p>
            This project integrates several concepts to show how you can use them together in a Next.js project.
          </p>
          <p>
            It also serves as template for creating new projects.
          </p>
          <pre>
{`git clone https://github.com/iaincollins/nextjs-starter.git
npm install
npm run dev`}
          </pre>
          <p>
            The simplest way to deploy projects to the cloud is with with 'now', which is from Zeit, the creators of Next.js framework.
          </p>
            <pre>
{`npm install -g now
now`}
            </pre>
          <p>
            For more information on how to build and deploy see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/README.md">README.md</a>
          </p>
          <p>
            For tips on configuring authentication see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md">AUTHENTICATION.md</a>
          </p>
          <p>
            The next.js repository has a <a href="https://github.com/zeit/next.js/tree/master/examples">great selection of examples</a> which are excellent reference.
          </p>
        </Container>
      </Layout>
    )
  }
}
