import Page from '../components/page'
import Layout from '../components/layout'
import { Row, Col, Button } from 'reactstrap'


export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="How It Works">
        <Row>
          <Col xs="12" lg="6">
            <h1 className="display-3">How It Works</h1>
            <h4>Live Reloading</h4>
            <p>
              When running a Next.js project in development mode changes to JavaScript, HTML and CSS are live reloaded, meaning any changes to pages are applied immediately without a browser refresh.
            </p>
          </Col>
          <Col>

          </Col>
      </Row>
     </Layout>
    )
  }
}
