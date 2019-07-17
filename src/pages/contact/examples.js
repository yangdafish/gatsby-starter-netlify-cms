import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Immediate Circle</h1>
              <p>
                Make sure you and your family fill out the census
              </p>
              <ul>
                <li>
                  <Link to="/faqs">FAQs Contain Instructions</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                Make sure people you know have a good understanding of what the census is, and what it is not.
                If people have more questions, point them to this site, or the official government census website.
              </p>
              <Link to="https://www.census.gov">Official Census Site </Link>
              {/* <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>
                This can be caused by the offline-plugin.{' '}
                <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                  Workaround
                </a>{' '}
                is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
              </p>
              <h3>Adding reCAPTCHA</h3>
              <p>
                If you are planning to add reCAPTCHA please go to{' '}
                <a href="https://github.com/imorente/gatsby-netlify-form-example">
                  imorente/gatsby-netlify-form-example
                </a>{' '}
                for a working example.
              </p> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
