import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1620147688690-91e8f0b70d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Discussion Forums',
  feature2ImgAlt: 'Discussion Forums Image Alt',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1591981813227-fb37f0cf04ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Interactive Tutorials Image Alt',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1481555716071-8830d3e254ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Engage in hands-on learning with interactive tutorials on various cybersecurity topics.',
  feature3ImgAlt: 'Ethical Hacking Case Studies Image Alt',
  feature1Title: 'Interactive Tutorials',
  feature2Description:
    'Join discussions with cybersecurity experts and enthusiasts to share knowledge and insights.',
  feature3Description:
    'Explore real-world case studies and best practices in ethical hacking to enhance your skills.',
  feature3Title: 'Ethical Hacking Case Studies',
}

Features1.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features1
