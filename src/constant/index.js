export const emailjsInfo = {
  service_id: "service_s3varic",
  template_id: "template_iztn3zm",
  user_id: "user_pgMNZ7gCLksHJUKI3nlLx",
};

export const mailTemplate = (state) => {
  const template = `
  <p>Telefon : ${state.phoneNumber}</p>
  <p>Mail : ${state.email}</p>
  <p>الوزن  : ${state.weight} kg</p>
  <p>الطول : ${state.length} cm</p>
  <p>فصيلة الدم : ${state.bloodType}</p> 
  <p>هل عانيت من مرض خطير سابق / أو من مرض مزمن : ${
    state.beforeilness ? "Yes" : "No"
  } ,${state.beforeilnessDesc}</p>
  <p>هل أصبت بالكورونا : ${state.covid ? "Yes" : "No"}</p>
  <p>هل تعاني من ارتفاع ضغط الدم :  ${state.tension ? "Yes" : "No"}</p>
  <p>ألديك مرض في القلب :  ${state.heartDisease ? "Yes" : "No"}</p>
  <p> ألديك ربو / مشكلة في التنفس :  ${state.breathProblem ? "Yes" : "No"}</p>
  <p> ألديك رد فعل تجاه التخدير :  ${state.anestesik ? "Yes" : "No"}</p>
  <p>هل تعاني من مرض السكري :  ${state.diabet ? "Yes" : "No"}</p>
  <p>ألديك مشكلة في الغدة الدرقية :  ${state.troid ? "Yes" : "No"}</p>
  <p>هل تعرضت لسكتة دماغية / فالج :  ${state.felc ? "Yes" : "No"}</p>
  <p>هل تعاني من القلق:  ${state.anxiety ? "Yes" : "No"}</p>
  <p>هل جرى نقل دم لك :  ${state.bloodProblem ? "Yes" : "No"}</p>
  <p>ألديك مرض الإيدز :  ${state.hiv ? "Yes" : "No"}</p>
  <p>هل تعاني من التهاب الكبد : ${state.hepatit ? "Yes" : "No"}</p>
  <p> إذا كان الجواب نعم، فهل هو التهاب الكبد A أو B أو C : ${
    state.hepatitDesc
  }</p>
  <p> ألديك مشكلة في تخثر عند النزيف : ${state.bloodProblem2 ? "Yes" : "No"}</p>
  <p> ألديك فتق في البطن : ${state.gobekDisease ? "Yes" : "No"}</p>
  <p>هل أصبت بالسرطان : ${state.cancer ? "Yes" : "No"}</p>
  <p>هل تعاني من فقر الدم : ${state.anemi ? "Yes" : "No"}</p>
  <p>الأدوية التي تتناولها دائما : ${state.usedDrugs}</p>
  <p>هل لديك حساسية تجاه الأدوية : ${state.medicineAlerjik ? "Yes" : "No"}</p>
  <p>هل لديك حساسية تجاه الأطعمة : ${state.medicineAlerjik ? "Yes" : "No"}</p>
  <p>هل تدخن السجائر/ النارجيلة : ${state.smokeUsage ? "Yes" : "No"}</p>
  <p>كم واحدة في اليوم : ${state.smokeUsageDesc}</p>
  <p>"هل تتعاطى الكحول وما وتيرة شربه : ${state.alcoholUsage}</p>
  <p>ماالعمليات الجراحية السابقة التي أجريتها : ${state.surgeryBefore}</p>
  <p>ما تواريخ العمليات الجراحية السابقة وماه : ${state.surgeryTimes}</p>
  <p>هل تعتقد أنك تعاني من مرض مهم : ${state.importantDisease}</p>
  <p>هل تستخدمين طريقة لمنع الحمل : ${state.birthControl ? "Yes" : "No"}</p>
  <p>أرغب زف تل رق جميع الرسائل التجارية من هيلثا العالمية، لقد قرأت المعلومات المتعلقة بذلك.: ${
    state.acceptReceiveMail ? "Yes" : "No"
  }</p>
  `;

  return template;
};
