import React from "react";
import PropTypes from 'prop-types';

const TableBody = ({ children, className }) => <tbody className={className}>{children}</tbody>;

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
export default TableBody;