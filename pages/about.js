import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="About">
        <h1 className="display-2">About</h1>
        <h2>Live Reloading</h2>
        <p>
          When running a Next.js project in development mode changes to JavaScript, HTML and CSS are live reloaded, meaning any changes to pages are applied immediately without a browser refresh.
        </p>
     </Layout>
    )
  }
}
