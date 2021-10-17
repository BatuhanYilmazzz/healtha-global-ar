import React, { useState } from "react";
import { ConsultancyStyled } from "../../styles/pages";
import emailjs from "emailjs-com";
import { emailjsInfo } from "../../constant/index";

function Consultancy() {
  const [state, setState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name}`,
    to_name: "Aksan Health",
    message: `I am ${state.name} <br/> My email adress: ${state.email}<br/> I want to get service about ${state.service} <br/> Message: ${state.message}`,
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send(
      emailjsInfo.service_id,
      emailjsInfo.template_id,
      template_params,
      emailjsInfo.user_id
    );
    alert("We will keep in touch you as soon as possible");
    setState({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  }
  return (
    <ConsultancyStyled>
      <div className='container'>
        <h1>استفيدوا من خدماتنا الاستشارية المجانية لجميع مشاكلكم.</h1>
        <div className='row'>
          <div className='col'>
            <form onSubmit={sendEmail}>
              <input
                type='text'
                placeholder='اسمكم ولقبكم'
                name='name'
                value={state.name}
                onChange={onChange}
                required
              />
              <input
                type='email'
                placeholder='بريدكم الالك ريو زن'
                value={state.email}
                name='email'
                onChange={onChange}
                required
              />
              <input
                type='text'
                placeholder='حددوا الموضوع'
                value={state.service}
                name='service'
                onChange={onChange}
                required
              />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='8'
                placeholder='رسالتكم'
                onChange={onChange}
                value={state.message}
                required
              ></textarea>
              <button type='submit'>إرسال</button>
            </form>
          </div>
        </div>
      </div>
    </ConsultancyStyled>
  );
}

export default Consultancy;
