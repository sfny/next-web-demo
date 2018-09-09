import Page from '../components/page'
import Layout from '../components/layout'
import { Row, Col, Button, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import Link from 'next/link'


export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Pricing">
        <h1 className="display-2 text-center">Pricing</h1>
        <Row className="pb-5">
          <Col xs="12" sm="4" className="pt-5">
            <h3 className="text-center mb-4">Upstart</h3>
            <ListGroup>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardBody>
                <Button color="primary" size="lg" block>Sign Up</Button>
              </Card>
            </ListGroup>
          </Col>
          <Col xs="12" sm="4" className="pt-5">
            <h3 className="text-center mb-4">Standard</h3>
            <ListGroup>
              <ListGroupItem><a className="text-dark" href="http://www.passportjs.org">Passport</a></ListGroupItem>
              <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">Email Sign In</a></Link></ListGroupItem>
              <ListGroupItem><Link href="/examples/authentication"><a className="text-dark">oAuth (Facebook, Google, Twitter…)</a></Link></ListGroupItem>
              <ListGroupItem><a className="text-dark" href="https://www.npmjs.com/package/next-auth">NextAuth</a></ListGroupItem>
              <ListGroupItem><Button color="primary" size="lg" block>Sign Up</Button></ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="12" sm="4" className="pt-5">
            <h4 className="text-center mb-4">Enterprise</h4>
            <div className='tri'>
              <ListGroupItem><a className="text-dark" href="https://getbootstrap.com">Bootstrap 4.0</a></ListGroupItem>
              <ListGroupItem><a className="text-dark" href="http://reactstrap.github.io/">Reactstrap</a></ListGroupItem>
              <ListGroupItem><a className="text-dark" href="https://ionicframework.com/docs/ionicons/">Ionicons</a></ListGroupItem>
              <ListGroupItem><a className="text-dark" href="http://sass-lang.com/">SASS</a></ListGroupItem>
              <ListGroupItem><Button className='pink' color="primary" size="lg" block>Sign Up</Button></ListGroupItem>
            </div>
          </Col>
        </Row>
        <style jsx>{`
          .tri  {
            border-radius: 12px;
            backgroundColor: grey;
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
            .pink {
              border-radius: 0px;
              backgroundColor: pink;
            }
          }
        `}</style>
     </Layout>
    )
  }
}
