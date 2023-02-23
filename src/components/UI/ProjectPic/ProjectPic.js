import { Image } from "@crystallize/reactjs-components";
import PropTypes from "prop-types";

import useCrystallize from "../../../utils/useCrystallize";

function ProjectPic({ imageSrc }) {
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
      url={imageFromCrystallize.url}
      variants={imageFromCrystallize.variants}
      alt={imageFromCrystallize.alt}
      sizes="(min-width: 500px) 500px, 100vw"
    />
  );
}

ProjectPic.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ProjectPic;
