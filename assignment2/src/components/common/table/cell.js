import React from "react";
import PropTypes from 'prop-types';

const TableCell = ({ children, label }) => <td label={label}>{children}</td>;

TableCell.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string
}
export default TableCell;