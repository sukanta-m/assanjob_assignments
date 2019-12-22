import React from "react";
import PropTypes from 'prop-types';

const TableRow = ({ children, onClick, code }) => {
  const handleOnClick = () => {
    if (onClick)
      onClick(code);
  }
  return <tr onClick={handleOnClick}>{children}</tr>
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  code: PropTypes.string
}

export default TableRow;