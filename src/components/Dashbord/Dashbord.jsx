import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dashbord = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="main">
            <section className="hbox ">
              {/* <!-- .aside --> */}
              <aside
                className="bg-black aside-md hidden-print hidden-xs"
                id="nav"
              >
                <section className="vbox">
                  <section className="w-f scrollable">
                    <div
                      className="slim-scroll"
                      data-height="auto"
                      data-disable-fade-out="true"
                      data-distance="0"
                      data-size="10px"
                      data-railOpacity="0.2"
                    >
                      <div className="clearfix wrapper dk nav-user hidden-xs">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="thumb avatar pull-left m-r">
                              <img
                                src="images/a0.png"
                                className="dker"
                                alt="..."
                              />
                              <i className="on md b-black"></i>
                            </span>
                            <span className="hidden-nav-xs clear">
                              <span className="block m-t-xs">
                                <strong className="font-bold text-lt">
                                  John.Smith
                                </strong>
                                <b className="caret"></b>
                              </span>
                              <span className="text-muted text-xs block">
                                Art Director
                              </span>
                            </span>
                          </a>
                          <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li>
                              <span className="arrow top hidden-nav-xs"></span>
                              <a href="#">Settings</a>
                            </li>
                            <li>
                              <a href="profile.html">Profile</a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="badge bg-danger pull-right">
                                  3
                                </span>
                                Notifications
                              </a>
                            </li>
                            <li>
                              <a href="docs.html">Help</a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a
                                href="modal.lockme.html"
                                data-toggle="ajaxModal"
                              >
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- nav --> */}
                      <nav className="nav-primary hidden-xs">
                        <div className="text-muted text-sm hidden-nav-xs padder m-t-sm m-b-sm">
                          Start
                        </div>
                        <ul className="nav nav-main" data-ride="collapse">
                          <li className="active">
                            <a href="index.html" className="auto">
                              <i className="i i-statistics icon"> </i>
                              <span className="font-bold">Overview</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="auto">
                              <span className="pull-right text-muted">
                                <i className="i i-circle-sm-o text"></i>
                                <i className="i i-circle-sm text-active"></i>
                              </span>
                              <b className="badge bg-danger pull-right">4</b>
                              <i className="i i-stack icon"> </i>
                              <span className="font-bold">Layouts</span>
                            </a>
                            <ul className="nav dk">
                              <li>
                                <a href="layout-color.html" className="auto">
                                  <i className="i i-dot"></i>
                                  <span>Color option</span>
                                </a>
                              </li>
                              <li>
                                <a href="layout-hbox.html" className="auto">
                                  <i className="i i-dot"></i>{" "}
                                  <span>Hbox layout</span>
                                </a>
                              </li>
                              <li>
                                <a href="layout-boxed.html" className="auto">
                                  <i className="i i-dot"></i>
                                  <span>Boxed layout</span>
                                </a>
                              </li>
                              <li>
                                <a href="layout-fluid.html" className="auto">
                                  <i className="i i-dot"></i>
                                  <span>Fluid layout</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="line dk hidden-nav-xs"></div>
                        <div className="text-muted text-xs hidden-nav-xs padder m-t-sm m-b-sm">
                          Lables
                        </div>
                        <ul className="nav">
                          <li>
                            <a href="mail.html#work">
                              <i className="i i-circle-sm text-info-dk"></i>
                              <span>Work space</span>
                            </a>
                          </li>
                          <li>
                            <a href="mail.html#social">
                              <i className="i i-circle-sm text-success-dk"></i>
                              <span>Connection</span>
                            </a>
                          </li>
                          <li>
                            <a href="mail.html#projects">
                              <i className="i i-circle-sm text-danger-dk"></i>
                              <span>Projects</span>
                            </a>
                          </li>
                        </ul>
                        <div className="text-muted text-xs hidden-nav-xs padder m-t-sm m-b-sm">
                          Circles
                        </div>
                        <ul className="nav">
                          <li>
                            <a href="#">
                              <i className="i i-circle-sm-o text-success-lt"></i>
                              <span>College</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="i i-circle-sm-o text-warning"></i>
                              <span>Social</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      {/* <!-- / nav --> */}
                    </div>
                  </section>

                  <footer className="footer hidden-xs no-padder text-center-nav-xs">
                    <a
                      href="modal.lockme.html"
                      data-toggle="ajaxModal"
                      className="btn btn-icon icon-muted btn-inactive pull-right m-l-xs m-r-xs hidden-nav-xs"
                    >
                      <i className="i i-logout"></i>
                    </a>
                    <a
                      href="#nav"
                      data-toggle="className:nav-xs"
                      className="btn btn-icon icon-muted btn-inactive m-l-xs m-r-xs"
                    >
                      <i className="i i-circleleft text"></i>
                      <i className="i i-circleright text-active"></i>
                    </a>
                  </footer>
                </section>
              </aside>
              {/* <!-- /.aside --> */}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashbord;
