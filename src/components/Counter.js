import React from 'react'
import PropTypes from 'prop-types'


const CounterGrid = () => (
  <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tweets</p>
      <p className="title">3,456</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Following</p>
      <p className="title">123</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Followers</p>
      <p className="title">456K</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Likes</p>
      <p className="title">789</p>
    </div>
  </div>
</nav>
)

CounterGrid.propTypes = {
  counterItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default CounterGrid
