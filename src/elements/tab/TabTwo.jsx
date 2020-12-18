import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Software skills",
      tab2 = "Awards",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    {/* <Tab>{tab2}</Tab> */}
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          {/* <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a> */}
                          <a>Languages:</a>
                          Ruby, Python, Javascript, C#, Shell Scripting
                        </li>
                        <li>
                          {/* <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a> */}
                          <a>Frontend:</a>
                          HTML, CSS, Bootstrap, JS, TS, ReactJS, Redux, React
                          Native, Expo
                        </li>
                        <li>
                          {/* <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a> */}
                          <a>Backend:</a>
                          Ruby on Rails, Firebase, Node.js, Passport, JWT, AWS,
                          S3
                        </li>
                        <li>
                          {/* <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a> */}
                          <a>Databases:</a>
                          MySQL, SQLite, PostgreSQL, MongoDB
                        </li>
                        <li>
                          {/* <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a> */}
                          <a>Tools & Technologies:</a>
                          Docker, Git, Gitlab CI/CD, Appium, Heroku, Kubernetes,
                          iOS Automation, Flask, Machine Learning, Deep
                          Learning, Tensorflow
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Software Developer, Specialist
                            <span> - Bell Canada</span>
                          </a>{" "}
                          2020 - current
                        </li>
                        <li>
                          <a href="/service">
                            Full Stack & Devops Intern
                            <span> - Bell Canada</span>
                          </a>{" "}
                          2018 - 2019
                        </li>
                        <li>
                          <a href="/service">
                            Engineering Design & Graphics Teaching Assistant
                            <span> - McMaster University</span>
                          </a>{" "}
                          2016 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Electrical Designer - Coop
                            <span> - Zarpac Inc, Pro Mach </span>
                          </a>{" "}
                          2017
                        </li>
                        <li>
                          <a href="/service">
                            Junior Equipment Engineer
                            <span> - Royal Adhesives and Sealants Ltd. </span>
                          </a>{" "}
                          2016
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Bachelor of Electrical Engineering & Management
                            <span> - McMaster University, Canada</span>
                          </a>{" "}
                          2014-2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
