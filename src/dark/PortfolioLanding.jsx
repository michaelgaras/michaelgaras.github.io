import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import Particles from "react-particles-js";
import { FiChevronUp } from "react-icons/fi";
import Typist from "react-typist";

import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import resume from "../component/common/MG_Resume.pdf";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Believe you can and you're halfway there.",
    description: "",
    buttonText: "My Resume",
    buttonLink: resume,
  },
];

class PortfolioLanding extends Component {
  render() {
    let title = "About Me",
      description = `A 2020 McMaster Electrical Engineering and Management graduate with 3+ years of working experience. Highly involved in Software Full Stack Development and DevOps roles, including Web Development and Application Development.

"Believe you can and you're halfway there." `;
    const PostList = BlogContent.slice(0, 3);
    return (
      <div className="active-dark">
        <Helmet pageTitle="Portfolio Landing" />

        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
        {/* Start Slider Area   */}
        <div id="home" className="fix">
          <div className="slider-wrapper">
            {/* Start Single Slide */}
            <div
              className="slider-activation slider-creative-agency with-particles"
              id="home"
            >
              <div className="frame-layout__particles">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 50,
                      },
                      size: {
                        value: 4,
                      },
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse",
                        },
                      },
                    },
                  }}
                />
              </div>
              {SlideList.map((value, index) => (
                <div
                  className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
                  key={index}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? (
                            <span className="custom-quote">
                              {value.category}
                            </span>
                          ) : (
                            ""
                          )}
                          <h1 className="title">
                            Hi, I’m Michael Garas <br />
                            <TextLoop>
                              <Typist>
                                <span>Application Developer.</span>
                              </Typist>

                              <Typist>
                                <span>Web Developer.</span>
                              </Typist>

                              <Typist>
                                <span>Full Stack Developer.</span>
                              </Typist>

                              <Typist>
                                <span>Wordpress, Wix.</span>
                              </Typist>

                              <Typist>
                                <span>Weebly, Shopify.</span>
                              </Typist>
                              {/* <span> JS Developer.</span>
                                                        <span> UI/UX Designer.</span>
                                                        <span> Content Writter.</span> */}
                            </TextLoop>{" "}
                          </h1>
                          <h2>based in Toronto.</h2>
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-primary-color"
                                href={`${value.buttonLink}`}
                                target="_blank"
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End Single Slide */}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div id="about" className="fix">
          <div className="about-area ptb--120  bg_color--1">
            <div className="about-wrapper">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-5">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src="/assets/images/about/mg-1.jpg"
                        alt="About Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about-inner inner">
                      <div className="section-title">
                        <h2 className="title">{title}</h2>
                        <p className="description">{description}</p>
                      </div>
                      <div className="row mt--30">
                        <TabTwo tabStyle="tab-style--1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End About Area */}

        {/* Start Service Area  */}
        {/* <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Awesome Service</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div id="portfolio" className="fix">
          <div className="portfolio-area ptb--120 bg_color--1">
            <div className="portfolio-sacousel-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                      <h2 className="title">My Latest Project</h2>
                      <p>Checkout some of my latest software projects.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <PortfolioList
                    styevariation="text-center mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                    item="6"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    {/* <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Blog Area */}
        {/* <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, <br />
                    but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
        {/* End Blog Area */}

        {/* Start COntact Area */}
        <div id="contact" className="fix">
          <div className="rn-contact-area ptb--120 bg_color--1">
            <ContactThree
              contactImages="/assets/images/about/mg-1.jpg"
              contactTitle="Hire Me."
            />
          </div>
        </div>
        {/* End COntact Area */}

        <FooterTwo />
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </div>
    );
  }
}

export default PortfolioLanding;
