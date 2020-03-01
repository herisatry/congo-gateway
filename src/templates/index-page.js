import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Team from '../components/Team'
import Counter from '../components/Counter'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 is-fullheight"
      style={{
        height: '100vh',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `cover`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              ' rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h4
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            width:'1000px',
          }}
        >
          {subheading}
        </h4>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container is-fluid">
        <div className="section">
          <div className="columns is-gapless is-multiline">
            <div className="column is-centered">
              <div className="content">
                <div className="section">
                  <div className="tile">
                    <h2 className="title has-text-left">{mainpitch.title}</h2>
                  </div>
                  <div className="tile">
                    <p className="has-text-justified">{mainpitch.description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                  </div>
                </div>

                <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,backgroundPosition: `bottom center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className="column" style={{color:'white'}}>
                  <p className=" has-text-weight-semibold has-text-justified">
                  Après plus de cinquante ans de colonisation,le deuxième plus grand pays du continent africain a accédé à l’indépendance en 1960.
                  Dès lors, les investisseurs étrangers n'ont jamais cessé de revenir en République Démocratique du Congo à la faveur des efforts fournis par ses dirigeants en termes de l’amélioration du climat des affaires,
                   de l’immensité de ses potentialités et de ses diverses opportunités d’investissements. La RD Congo attire des entrepreneurs venant des quatre coins du monde..
                  </p>
                  <Counter />
                </div>
    </div>
                  <div className="column is-12 ">
                    <div className="section-title ">
                      <h3 className="has-text-weight-semibold is-uppercase">Nos Experts</h3>
                      <p className="has-text-weight-semibold has-text-justified">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                    </div>
                  <Team />
                </div>

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-uppercase">
                    BLOG
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
