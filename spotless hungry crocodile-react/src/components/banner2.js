import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div className="banner2-container1 thq-section-padding">
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner2-text3 thq-heading-2">
                  Join CyberSec Hub Today
                </h2>
              </Fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="banner2-text5 thq-heading-3">
                  Enhance your cybersecurity skills with interactive tutorials,
                  forums, and case studies.
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner2-text4">Sign Up Now</span>
              </Fragment>
            )}
          </span>
        </button>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  heading1: undefined,
  action1: undefined,
  video1Src:
    'https://videos.pexels.com/video-files/3978663/3978663-hd_1280_720_24fps.mp4',
  video1Poster:
    'https://images.pexels.com/videos/3978663/pictures/preview-0.jpg',
  content1: undefined,
}

Banner2.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner2
