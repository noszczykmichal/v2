/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import { Image } from "@crystallize/reactjs-components";

import "./StyledPic.scss";

function StyledPic({ data }) {
  const imageFromCrystallize = {
    url: data.catalogue.variants[0].images[0].url,
    variants: [...data.catalogue.variants[0].images[0].variants],
    alt: data.catalogue.variants[0].images[0].altText,
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

export default StyledPic;
