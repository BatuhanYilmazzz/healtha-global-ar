import React, { useState } from "react";
import { ContactUsStyled } from "../../styles/pages";
import Map from "../../layout/Map";
import emailjs from "emailjs-com";
import { images } from "../../constant/images";

function ContactUs() {
  const [state, setState] = useState({
    name: "",
    message: "",
    email: "",
    service: "",
    phone: "",
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name}`,
    to_name: "Aksan Health",
    message_html: `I am ${state.name} <br/> My email adress: ${state.email}<br/> My phone number : ${state.phone}<br/> I want to get service about ${state.service} <br/> Message:${state.message}`,
  };
  var service_id = "aksanhealth";
  var template_id = "mainpage";
  var user_id = "user_w83tNLLtCjsDK9FeoB3ex";
  function sendEmail(e) {
    e.preventDefault();
    emailjs.send(service_id, template_id, template_params, user_id);
    alert("We will keep in touch you as soon as possible");
    setState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  }

  return (
    <ContactUsStyled>
      <div
        className='masthead'
        style={{ backgroundImage: `url(${images.contact.header})` }}
      >
        <h1>اتصل</h1>
      </div>
      <div className='container'>
        <div className='row text-right  flex-row-reverse'>
          <div className='col-md-6 col-sm-12 contact'>
            <h1>نموذج الاتصال</h1>
            <p className='mt-4'>يمكنكم الاتصال بنا لطرح أي سؤال كان.</p>
          </div>
          <div className='col-sm-12 col-md-6 '>
            <p>
              Konaklar Mah. Akağaç Sk. Aksan Binası No:7 34330 4. Levent
              Beşiktaş/İstanbul
            </p>
            <p>+90 212 293 45 08</p>
            <p className='font-weight-bold'> info@healthaglobal.com</p>
          </div>
        </div>
        <div className='row my-5 py-5 flex-md-row-reverse'>
          <form className='col-sm-12 col-md-6 text-right' onSubmit={sendEmail}>
            <input
              type='text'
              placeholder='اسمكم ولقبكم'
              value={state.name}
              name='name'
              onChange={onChange}
              required
            />
            <input
              type='email'
              placeholder='بريدكم الالكتروني'
              value={state.email}
              name='email'
              onChange={onChange}
              required
            />
            <input
              type='number'
              placeholder='رقم تليفونك'
              value={state.phone}
              name='phone'
              onChange={onChange}
              required
            />
            <input
              type='text'
              placeholder='اختر الخدمة'
              value={state.service}
              name='service'
              onChange={onChange}
              required
            />
            <textarea
              value={state.message}
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder='رسالتك'
              onChange={onChange}
              required
            ></textarea>
            <button type='submit' className='appointment-button'>
              إرسال
            </button>
          </form>
          <div className='col-md-6 map'>
            <Map />
          </div>
        </div>
      </div>
    </ContactUsStyled>
  );
}

export default ContactUs;
