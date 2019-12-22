import React from "react";

export default ({ children, onClick, code }) => {
  const handleOnClick = () => {
    if (onClick)
      onClick(code);
  }
  return <tr onClick={handleOnClick}>{children}</tr>
};