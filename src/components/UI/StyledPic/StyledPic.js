/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import { Image } from "@crystallize/reactjs-components";

function StyledPic({ data }) {
  //   console.log(data.catalogue.variants[0].images[0].url);
  const imageFromCrystallize = {
    url: `${data.catalogue.variants[0].images[0].url}`,
    variants: [...data.catalogue.variants[0].images[0].variants],
    // alt: "my photo",
  };
  return (
    <Image {...imageFromCrystallize} sizes="(max-width: 300px) 300w, 700px" />
  );
}

export default StyledPic;
