import React from "react";

// import "./custom-buttom.styles.scss";

import { CustomButtonConatainer } from "./custom-button.styles";

const CustomButton = ({children, ...props}) => {

  return (
  <CustomButtonConatainer  {...props}>
    {children}
  </CustomButtonConatainer>
  )
};

export default CustomButton;
