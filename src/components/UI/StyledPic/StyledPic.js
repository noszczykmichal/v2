/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { Image } from "@crystallize/reactjs-components";

import "./StyledPic.scss";

function StyledPic({ catalogue }) {
  const imageFromCrystallize = {
    url: catalogue.variants[0].images[0].url,
    variants: [...catalogue.variants[0].images[0].variants],
    alt: catalogue.variants[0].images[0].altText,
  };

  return (
    <div className="image-wrapper">
      <div className="image-wrapper__container">
        <Image
          {...imageFromCrystallize}
          sizes="(min-width: 500px) 500px, 100vw"
        />
      </div>
    </div>
  );
}

StyledPic.propTypes = {
  catalogue: PropTypes.shape({
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.arrayOf(
          PropTypes.shape({
            altText: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            variants: PropTypes.arrayOf(
              PropTypes.shape({
                url: PropTypes.string.isRequired,
                width: PropTypes.number.isRequired,
              }).isRequired,
            ).isRequired,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default StyledPic;
