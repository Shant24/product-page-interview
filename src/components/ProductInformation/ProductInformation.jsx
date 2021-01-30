import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './productInformation.module.scss';
import ProductDropdown from '../ProductDropdown/ProductDropdown';
import HeartIcon from '../svg/HeartIcon';
import StarIcon from '../svg/StarIcon';
import sellerPhoto from '../../assets/images/seller-photo.png';
import HelpIcon from '../../assets/images/help-icon.png';

const options = [
  { label: 'US', value: 'us' },
  { label: 'UK', value: 'uk' },
  { label: 'RU', value: 'ru' },
  { label: 'AM', value: 'am' },
];

const ProductInformation = () => {
  const [heartStatus, setHeartStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleHeartStatus = () => {
    // fetch action
    setHeartStatus(!heartStatus);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const { name } = e.target;

    if (name === 'buy') {
      // fetch action
    } else if (name === 'offer') {
      // fetch action
    } else if (name === 'pivot') {
      // fetch action
    }
  };

  return (
    <div className={styles.productInformationContainer}>
      <div className={styles.informationContainer}>
        <div className={styles.addingTime}>2 hours ago</div>

        <div className={styles.titleAndSize}>
          <h4 className={styles.title}>Off White x Nike Dunk Low</h4>

          <div className={styles.size}>US 10.5</div>
        </div>

        <div className={styles.productInformation}>
          <div>Nike Dunk Low x Off-White Pine Green</div>

          <div>Size: US 9.5 / EU 42-43</div>

          <div>Color: Green</div>

          <div>Condition: New</div>
        </div>

        <div className={styles.productSaleContainer}>
          <div className={styles.priceAndShipping}>
            <div className={styles.price}>$1600</div>

            <div className={styles.shippingContainer}>
              <div className={styles.shipping}>+20$ Shipping to:</div>

              <ProductDropdown
                options={options}
                selectedOption={selectedOption}
                setOption={setSelectedOption}
              />
            </div>
          </div>

          <HeartIcon isActive={heartStatus} onClick={toggleHeartStatus} />
        </div>

        <div className={styles.buttonsContainer}>
          <button onClick={handleButtonClick} name="buy">
            Buy Now
          </button>

          <button onClick={handleButtonClick} name="offer">
            Make Offer
          </button>

          <button onClick={handleButtonClick} name="pivot">
            Pivot
            <div className={styles.helpingContainer}>
              <img src={HelpIcon} alt="help_icon" />
              <div>Some information</div>
            </div>
          </button>
        </div>

        <div className={styles.productDescription}>
          <div className={styles.descriptionTitle}>Description</div>
          <div className={styles.descItem}>Condition 8/10.</div>
          <div className={styles.descItem}>Delivery time is 7-10 days.</div>
          <div className={styles.descItem}>
            Serious offers or inquires only please.
          </div>
          <div className={styles.descItem}>Located in NY</div>
        </div>

        <div className={styles.sellerContainer}>
          <div className={styles.sellerInformation}>
            <div className={styles.sellerPhoto}>
              <img src={sellerPhoto} alt="seller_photo" />
            </div>

            <div className={styles.sellerNameAndFeedback}>
              <div className={styles.sellerName}>straightkilla187real</div>
              <dir className={styles.sellerRate}>
                <div className={styles.rateStars}>
                  <StarIcon isActive={true} />
                  <StarIcon isActive={true} />
                  <StarIcon isActive={true} />
                  <StarIcon isActive={true} />
                  <StarIcon isActive={false} />
                </div>

                <div className={styles.feedbackCount}>
                  <Link to="/">3 Feedback</Link>
                </div>
              </dir>
            </div>

            <div className={styles.sellerHistory}>
              <small>Member since 12.02.20</small>

              <div className={styles.soldItems}>
                <Link to="/">24 Items For Sale</Link>
              </div>
            </div>
          </div>

          <Link to="/" className={styles.messageLink}>
            Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInformation);
