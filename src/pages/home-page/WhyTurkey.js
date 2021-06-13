import React from "react";
import { WhyTurkeyStyled } from "../../styles/pages";
import Markdown from "markdown-to-jsx";

function WhyTurkey({ data }) {
  console.log(data);
  return (
    <WhyTurkeyStyled>
      <div className='row'>
        <div className='col'>
          <div className='container'>
            <h1>{data && data[0].turkiye_health_turizm_title}</h1>
            <br />
            {data && <Markdown>{data[0]?.turkiye_health_turizm_desc}</Markdown>}
          </div>
        </div>
      </div>
    </WhyTurkeyStyled>
  );
}

export default WhyTurkey;
