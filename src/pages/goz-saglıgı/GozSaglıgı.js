import React, { useContext, useEffect } from "react";
import { GozSaglıgıStyled } from "../../styles/pages";
import { Row, Nav, Col, Tab } from "react-bootstrap";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

function GozSaglıgı() {
  const dataContext = useContext(DataContext);
  const { openHandleState, gozSaglıgıState, getGozSaglıgı } = dataContext;

  useEffect(() => {
    getGozSaglıgı();
    // eslint-disable-next-line
  }, []);
  return (
    <GozSaglıgıStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            gozSaglıgıState &&
            `url(${
              process.env.REACT_APP_API_URL +
              gozSaglıgıState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{gozSaglıgıState && gozSaglıgıState[0].header_title}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Tab.Container
              id='left-tabs-example'
              defaultActiveKey={
                (gozSaglıgıState && gozSaglıgıState[0].goz_tabs[0].title) ||
                "Intralase Lasik"
              }
            >
              <Row className='flex-md-row-reverse'>
                <Col sm={3}>
                  <Nav variant='pills' className='flex-column'>
                    {gozSaglıgıState &&
                      gozSaglıgıState[0].goz_tabs.map((item) => (
                        <Nav.Item key={item.id}>
                          <Nav.Link eventKey={item.title}>
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {gozSaglıgıState &&
                      gozSaglıgıState[0].goz_tabs.map((item) => (
                        <Tab.Pane eventKey={item.title} key={item.key}>
                          <h1> {item.title}</h1>
                          <Markdown>{item.description}</Markdown>
                          <br />
                          <br />
                          <img
                            src={process.env.REACT_APP_API_URL + item.image.url}
                            alt={item.title}
                          />
                          <br />
                          <br />
                          {item.bottom_description && (
                            <Markdown>{item.bottom_description}</Markdown>
                          )}
                          <br />
                          <br />
                          <button
                            className='appointment-button'
                            onClick={() => openHandleState("block")}
                          >
                            احصل على موعد
                          </button>
                        </Tab.Pane>
                      ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </GozSaglıgıStyled>
  );
}

export default GozSaglıgı;
