import React from 'react'
import PropTypes from 'prop-types'


const CounterGrid = () => (
  <div className="level is-desktop ">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading has-text-weight-bold">SUPERFICIE(km2)</p>
      <p className="title has-text-white">2.345.410</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading has-text-weight-bold">POTENTIEL HYDROÉLECTRIQUE(megawatts)</p>
      <p className="title has-text-white">100.000</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading has-text-weight-bold">HABITANTS</p>
      <p className="title has-text-white">95.784.841</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
      <div >
        <p className="heading has-text-weight-bold">VARIÉTÉS D’ÉCOSYSTÈME COUVRANT(hectares)</p>
        <p className="title has-text-white">145.000.000</p>
      </div>
    </div>
</div>
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
