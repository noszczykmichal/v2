import { gql, useQuery } from "@apollo/client";
import PropTypes from "prop-types";

function useCrystallize(imagePath) {
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
  const { loading, error, data } = useQuery(getImage, {
    variables: { imagePath },
  });

  return { loading, error, data };
}

useCrystallize.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default useCrystallize;
