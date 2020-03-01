import React from 'react'
import PropTypes from 'prop-types'
import {bayindu} from '../img/experts/bayindu.jpg'
import {tambwe} from '../img/experts/ntambwe.jpg'
import {pilipili} from '../img/experts/pilipili.png'
//import PreviewCompatibleImage from './PreviewCompatibleImage'

const TeamGrid = () => (
  <section className="tile team-area has-text-white" id="team">
		<div className="container">
			<div className="level">
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://i.imgur.com/CVwuYib.png" alt="MUHIRWA PILIPILI"/>
						<div className="team-hover is-uppercase">
							<h4>Shekina MUHIRWA PILIPILI <span>Project Manager</span></h4>
						</div>
					</div>
				</div>
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://i.imgur.com/tDfxXQj.jpg" alt="BAYINDU NGOBILA"/>
						<div className="team-hover">
							<h4>Gobi-Jr BAYINDU NGOBILA <span>Directeur – Commercial & Marketing</span></h4>
						</div>
					</div>
				</div>
				<div className="tile column is-4">
					<div className="single-team">
						<img src="https://i.imgur.com/8qcOkvJ.jpg" alt="Benitha TAMBWE"/>
						<div className="team-hover">
							<h4>Benitha TAMBWE <span>Business Analyst</span></h4>
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
