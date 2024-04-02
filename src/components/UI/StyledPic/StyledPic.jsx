import PropTypes from "prop-types";
import { Image } from "@crystallize/reactjs-components";

import "./StyledPic.scss";
import useCrystallize from "../../../utils/hooks/useCrystallize";

function StyledPic({ imagePath }) {
  const { data } = useCrystallize(imagePath);

  let imageFromCrystallize = {};
  if (data) {
    imageFromCrystallize = {
      url: data.catalogue.variants[0].images[0].url,
      variants: [...data.catalogue.variants[0].images[0].variants],
      alt: data.catalogue.variants[0].images[0].altText,
    };
  }

  return (
    <div className="image-wrapper">
      <div className="image-wrapper__container">
        {data && (
          <Image
            url={imageFromCrystallize.url}
            variants={imageFromCrystallize.variants}
            alt={imageFromCrystallize.alt}
            sizes="(min-width: 500px) 500px, 100vw"
          />
        )}
      </div>
    </div>
  );
}

StyledPic.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default StyledPic;
