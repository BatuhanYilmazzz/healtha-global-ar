import React from "react";
import { SpinnerStyled } from "../styles/components";
const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className='spinner-grow' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
