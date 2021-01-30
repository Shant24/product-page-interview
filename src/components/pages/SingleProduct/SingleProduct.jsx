import React from 'react';
import ProductInformation from '../../ProductInformation/ProductInformation';
import ProductSlider from '../../ProductSlider/ProductSlider';
import styles from './singleProduct.module.scss';

const SingleProduct = () => {
  return (
    <div className={styles.singleProduct}>
      <ProductSlider />

      <ProductInformation />
    </div>
  );
};

export default SingleProduct;
