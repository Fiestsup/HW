import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1631582053308-40f482e7ace5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'The best platform for ethical hacking practices and learning. I have improved my skills significantly thanks to the resources available here.',
  author3Position: 'Security Consultant',
  content1:
    'I have learned so much from the tutorials and discussions on this platform. It has greatly enhanced my skills and knowledge in cybersecurity.',
  author2Position: 'Ethical Hacker',
  author2Name: 'Jane Smith',
  author3Name: 'Alex Johnson',
  author1Name: 'John Doe',
  review1: '5 stars',
  review2:
    'This platform is a goldmine of resources for anyone interested in cybersecurity. The tools and case studies are invaluable.',
  author1Src:
    'https://images.unsplash.com/photo-1485634476346-5c642f4b6722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Penetration Tester',
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of Alex Johnson',
  author4Alt: 'Image of Sarah Lee',
  author2Src:
    'https://images.unsplash.com/photo-1482555670981-4de159d8553b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Cybersecurity Analyst',
  author4Name: 'Sarah Lee',
  author4Src:
    'https://images.unsplash.com/photo-1632377082370-6608a1e37c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjg0NjM1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'I highly recommend this platform to anyone looking to stay updated in the ever-evolving field of cybersecurity. The forums are a great place for discussions.',
  heading1: 'Testimonials',
  author1Alt: 'Image of John Doe',
}

Testimonial.propTypes = {
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  author3Position: PropTypes.string,
  content1: PropTypes.string,
  author2Position: PropTypes.string,
  author2Name: PropTypes.string,
  author3Name: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  author1Src: PropTypes.string,
  author4Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  review3: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Testimonial
