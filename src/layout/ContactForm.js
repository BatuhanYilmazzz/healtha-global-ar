import React, { Fragment, useContext, useState } from "react";
import { ContactFormStyled, ContactFormBodyStyled } from "../styles/components";
import DataContext from "../context/dataContext";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";
import { emailjsInfo } from "../constant/index";
function ContactForm() {
  const dataContext = useContext(DataContext);
  const { openHandleState, formState } = dataContext;
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
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
    message: `I am ${state.name} <br/> My email adress: ${state.email}<br/> My phone number : ${state.phone}<br/>. I want to get service about ${state.service}`,
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
      phone: "",
      service: "",
    });
  }
  return (
    <Fragment>
      <ContactFormStyled>
        <button
          className='contact-form-icon'
          onClick={() => history.push("/contact-form")}
        >
          <p>نموذج الاتصال</p>
          <img src='/images/form.png' alt='form' />
        </button>
      </ContactFormStyled>

      <ContactFormBodyStyled style={{ display: `${formState}` }}>
        <button
          className='close-button'
          onClick={() => openHandleState("none")}
        >
          X
        </button>
        <form className='container' onSubmit={sendEmail}>
          <h1>موعد عبر الإنترنت</h1>
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
            placeholder='بريدكم الالكتروني'
            name='email'
            value={state.email}
            onChange={onChange}
            required
          />
          <input
            type='text'
            placeholder='رقم تليفونك'
            name='phone'
            value={state.phone}
            onChange={onChange}
            required
          />
          <input
            type='text'
            placeholder='اختر الخدمة'
            name='service'
            value={state.service}
            onChange={onChange}
            required
          />

          <p className='messages-wrapper'>
            <input type='checkbox' className='messages' />
            <span>
              أرغب زف تل رق جميع الرسائل التجارية من هيلثا العالمية، لقد قرأت
              المعلومات المتعلقة بذلك.
            </span>
          </p>
          <button className='contact-us' type='submit'>
            أتمموا الموعد
          </button>
        </form>
      </ContactFormBodyStyled>
    </Fragment>
  );
}

export default ContactForm;
