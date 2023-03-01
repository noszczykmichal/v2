import { Image } from "@crystallize/reactjs-components";
import PropTypes from "prop-types";

import useCrystallize from "../../../utils/useCrystallize";

function ProjectPic({ imageSrc, className }) {
  const { data } = useCrystallize(imageSrc);
  let imageFromCrystallize = {};

  if (data) {
    imageFromCrystallize = {
      url: data.catalogue.variants[0].images[0].url,
      variants: [...data.catalogue.variants[0].images[0].variants],
      alt: data.catalogue.variants[0].images[0].altText,
    };
  }

  return (
    <Image
      className={className}
      url={imageFromCrystallize.url}
      variants={imageFromCrystallize.variants}
      alt={imageFromCrystallize.alt}
      sizes="(min-width: 700px) 700px, 100vw"
    />
  );
}

ProjectPic.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ProjectPic;
