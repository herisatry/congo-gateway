import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline card">
    {gridItems.map(item => (
      <div key={item.text} className="column is-2 is-offset-1">
        <section className="section">
          <div className="has-text-centered">
            <div className="card-image">
              <figure className="image is-4by3">
                <div
              style={{
                width: '50px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            </figure>
            </div>
          </div>
            <div className="has-text-justified">
              <h3 className="title is-4">{item.title}</h3>
              {item.text}
            </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default FeatureGrid
