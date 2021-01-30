import React, { memo } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './productDropdown.scss';
import shippingArrow from '../../assets/images/shipping-arrow-icon.png';

const ProductDropdown = ({ options, setOption, selectedOption }) => {
  return (
    <Dropdown
      className="shippingOption"
      controlClassName="optionControl"
      placeholderClassName="optionPlaceholder"
      menuClassName="optionMenu"
      options={options}
      onChange={(option) => setOption(option)}
      value={selectedOption}
      arrowClosed={
        <img className="arrowOpen" src={shippingArrow} alt="arrow_open" />
      }
      arrowOpen={
        <img className="arrowClose" src={shippingArrow} alt="arrow_close" />
      }
    />
  );
};

export default memo(ProductDropdown);
