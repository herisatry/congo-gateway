import React from 'react'
import PropTypes from 'prop-types'


const CounterGrid = () => (
  <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">SUPERFICIE(km2)</p>
      <p className="title">2.345.410</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">POTENTIEL HYDROÉLECTRIQUE(megawatts)</p>
      <p className="title">100.000</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">HABITANTS</p>
      <p className="title">95.784.841</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">VARIÉTÉS D’ÉCOSYSTÈME COUVRANT(hectares)</p>
      <p className="title">145.000.000</p>
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
