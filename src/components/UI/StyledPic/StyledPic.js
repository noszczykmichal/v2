import { gql, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { Image } from "@crystallize/reactjs-components";

import "./StyledPic.scss";

function StyledPic({ imagePath }) {
  const getImage = gql`
    query GetImage($imagePath: String!) {
      catalogue(path: $imagePath) {
        ... on Product {
          variants {
            images {
              url
              altText
              variants {
                url
                width
              }
            }
          }
        }
      }
    }
  `;
  const { data } = useQuery(getImage, {
    variables: { imagePath },
  });

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
