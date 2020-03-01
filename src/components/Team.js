import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const TeamGrid = () => (
  <section className="tile team-area has-text-white" id="team">
		<div className="container">
			<div className="level">
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://via.placeholder.com/270/09f/fff.png" alt=""/>
						<div className="team-hover is-uppercase">
							<h4>john doe <span>web developer</span></h4>
						</div>
					</div>
				</div>
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://via.placeholder.com/270/09f/fff.png" alt=""/>
						<div className="team-hover">
							<h4>john doe <span>web developer</span></h4>
						</div>
					</div>
				</div>
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://via.placeholder.com/270/09f/fff.png" alt=""/>
						<div className="team-hover">
							<h4>john doe <span>web developer</span></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	  </section>
)

TeamGrid.propTypes = {
  teamItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default TeamGrid
