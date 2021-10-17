import React, { useState } from "react";
import { ContactFormPageStyled } from "../../styles/pages";
import emailjs from "emailjs-com";
import {
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { emailjsInfo, mailTemplate } from "../../constant/index";
import Brand from "../../layout/Brand";
function ContactForm() {
  const initialState = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    weight: "",
    length: "",
    bloodType: "",
    beforeilness: false,
    beforeilnessDesc: "",
    covid: false,
    tension: false,
    heartDisease: false,
    breathProblem: false,
    anestesik: false,
    diabet: false,
    troid: false,
    felc: false,
    anxiety: false,
    bloodProblem: false,
    hiv: false,
    hepatit: false,
    hepatitDesc: "",
    bloodProblem2: false,
    gobekDisease: false,
    cancer: false,
    anemi: false,
    usedDrugs: "",
    medicineAlerjik: false,
    foodAlerjik: false,
    smokeUsage: false,
    smokeUsageDesc: "",
    alcoholUsage: "",
    surgeryBefore: "",
    surgeryTimes: "",
    importantDisease: "",
    birthControl: false,
    acceptReceiveMail: false,
  };
  const [modalShow, setModalShow] = React.useState(false);

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name} ${state.surname}`,
    to_name: "Healtha Global",
    message: mailTemplate(state),
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        emailjsInfo.service_id,
        emailjsInfo.template_id,
        template_params,
        emailjsInfo.user_id
      )
      .then(
        (result) => {
          setState(initialState);
          setModalShow(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  return (
    <ContactFormPageStyled>
      <div
        className='masthead'
        style={{ backgroundImage: `url(/images/contact-us/contactpage.png)` }}
      >
        <h1>نموذج طلب عبر الإنترنت</h1>
      </div>
      <div className='wrapper'>
        <h3>استفيدوا من خدماتنا الاستشارية المجانية لجميع مشاكلكم.</h3>
        <br />
        <br />
        <Form onSubmit={sendEmail}>
          <Form.Label>اسم</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder='اسم'
              name='name'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>لقب</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder='لقب'
              name='surname'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>رقم الهاتف</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder=''
              type='number'
              name='phoneNumber'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Label>بريد</Form.Label>
          <InputGroup className='mb-3' size='lg'>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder='بريد'
              name='email'
              required
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <div className=''>
            <h5>املأ المعلومات أدناه بالكامل.</h5>
            <br />
            <Row>
              <Col>
                <Form.Label>الوزن</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder='الوزن'
                    name='weight'
                    onChange={handleChange}
                    type='number'
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>الطول</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder='الطول'
                    name='length'
                    onChange={handleChange}
                    type='number'
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>فصيلة الدم</Form.Label>
                <InputGroup className='mb-3' size='lg'>
                  <FormControl
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder='فصيلة الدم'
                    name='bloodType'
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <br />
          <h6> هل عانيت من مرض خطير سابق / أو من مرض مزمن</h6>
          <br />
          <Row>
            <Col xs={3}>
              <InputGroup className='mb-3'>
                <Form.Label md='0' className='checkboxForm-label'>
                  أجل
                </Form.Label>
                <InputGroup.Checkbox
                  name='beforeilness'
                  checked={state.beforeilness}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.checked })
                  }
                />
              </InputGroup>
            </Col>
            <Col xs={3}>
              <InputGroup className='mb-3'>
                <Form.Label className='checkboxForm-label'>لا</Form.Label>
                <InputGroup.Checkbox
                  name='beforeilness'
                  checked={!state.beforeilness}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: !e.target.checked })
                  }
                />
              </InputGroup>
            </Col>
          </Row>
          <InputGroup>
            <FormControl
              as='textarea'
              aria-label='With textarea'
              rows='5'
              placeholder='وصف'
              onChange={handleChange}
              name='beforeilnessDesc'
              required={state.beforeilness}
            />
          </InputGroup>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'> هل أصبت بالكورونا؟ نعم</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='covid'
                    checked={state.covid}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='covid'
                    checked={!state.covid}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>

          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعاني من ارتفاع ضغط الدم</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='tension'
                    checked={state.tension}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='tension'
                    checked={!state.tension}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك مرض في القلب</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='heartDisease'
                    checked={state.heartDisease}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='heartDisease'
                    checked={!state.heartDisease}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك ربو / مشكلة في التنفس</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='breathProblem'
                    checked={state.breathProblem}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='breathProblem'
                    checked={!state.breathProblem}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك رد فعل تجاه التخدير</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anestesik'
                    checked={state.anestesik}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label>لا</Form.Label>
                  <InputGroup.Checkbox
                    className='checkboxForm-label'
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anestesik'
                    checked={!state.anestesik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعاني من مرض السكري</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='diabet'
                    checked={state.diabet}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.diabet}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك مشكلة في الغدة الدرقية</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='troid'
                    checked={state.troid}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='troid'
                    checked={!state.troid}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعرضت لسكتة دماغية / فالج</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='felc'
                    checked={state.felc}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='felc'
                    checked={!state.felc}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعاني من القلق</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anxiety'
                    checked={state.anxiety}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anxiety'
                    checked={!state.anxiety}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل جرى نقل دم لك</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem'
                    checked={state.bloodProblem}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.bloodProblem}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك مرض الإيدز</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='hiv'
                    checked={state.hiv}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='diabet'
                    checked={!state.hiv}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعاني من التهاب الكبد</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='hepatit'
                    checked={state.hepatit}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='hepatit'
                    checked={!state.hepatit}
                  />
                </InputGroup>
              </Col>
            </Row>

            <InputGroup className='mb-3' size='lg'>
              <FormControl
                id='basic-url'
                aria-describedby='basic-addon3'
                placeholder='إذا كان الجواب نعم، فهل هو التهاب الكبد A أو B أو C'
                name='hepatitDesc'
                onChange={handleChange}
                required={state.hepatit}
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك مشكلة في تخثر عند النزيف</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem2'
                    checked={state.bloodProblem2}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='bloodProblem2'
                    checked={!state.bloodProblem2}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>ألديك فتق في البطن</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='gobekDisease'
                    checked={state.gobekDisease}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='gobekDisease'
                    checked={!state.gobekDisease}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل أصبت بالسرطان</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='cancer'
                    checked={state.cancer}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='cancer'
                    checked={!state.cancer}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تعاني من فقر الدم</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='anemi'
                    checked={state.anemi}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='anemi'
                    checked={!state.anemi}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <br />
          <div className='inputItem'>
            <h6>الأدوية التي تتناولها دائما</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder='الأدوية التي تتناولها دائما'
                onChange={handleChange}
                name='usedDrugs'
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل لديك حساسية تجاه الأدوية</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='medicineAlerjik'
                    checked={state.medicineAlerjik}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='medicineAlerjik'
                    checked={!state.medicineAlerjik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>

          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل لديك حساسية تجاه الأطعمة</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='foodAlerjik'
                    checked={state.foodAlerjik}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='foodAlerjik'
                    checked={!state.foodAlerjik}
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تدخن السجائر/ النارجيلة</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='smokeUsage'
                    checked={state.smokeUsage}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='smokeUsage'
                    checked={!state.smokeUsage}
                  />
                </InputGroup>
              </Col>
            </Row>

            <InputGroup className='mb-3' size='lg'>
              <FormControl
                id='basic-url'
                aria-describedby='basic-addon3'
                placeholder='كم واحدة في اليوم'
                name='smokeUsageDesc'
                onChange={handleChange}
                required={state.smokeUsage}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>هل تتعاطى الكحول وما وتيرة شربه</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder='هل تتعاطى الكحول وما وتيرة شربه'
                name='alcoholUsage'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>ماالعمليات الجراحية السابقة التي أجريتها</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder='وصف'
                name='surgeryBefore'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>ما تواريخ العمليات الجراحية السابقة وماهي</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder='وصف'
                name='surgeryTimes'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <br />
          <div className='inputItem'>
            <h6>هل تعتقد أنك تعاني من مرض مهم</h6>
            <br />
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='With textarea'
                rows='5'
                placeholder='وصف'
                name='importantDisease'
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div className='inputItem'>
            <br />
            <h6 className='mb-3'>هل تستخدمين طريقة لمنع الحمل</h6>
            <Row>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label md='0' className='checkboxForm-label'>
                    أجل
                  </Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name='birthControl'
                    checked={state.birthControl}
                  />
                </InputGroup>
              </Col>
              <Col xs={3}>
                <InputGroup className='mb-3'>
                  <Form.Label className='checkboxForm-label'>لا</Form.Label>
                  <InputGroup.Checkbox
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: !e.target.checked })
                    }
                    name='birthControl'
                    checked={!state.birthControl}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <p className='messages-wrapper'>
            <input
              type='checkbox'
              className='messages'
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.checked })
              }
              name='acceptReceiveMail'
            />
            أرغب زف تل رق جميع الرسائل التجارية من هيلثا العالمية، لقد قرأت
            المعلومات المتعلقة بذلك.
          </p>
          <button className='contact-us' type='submit'>
            أتمموا الموعد
          </button>
        </Form>
      </div>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={() => setModalShow(false)}
        show={modalShow}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className='wrap'>
            <p>سوف نتواصل معك في أقرب وقت ممكن. ابقى بصحة جيدة.</p>
            <Brand />
          </div>
        </Modal.Body>
      </Modal>
    </ContactFormPageStyled>
  );
}

export default ContactForm;
