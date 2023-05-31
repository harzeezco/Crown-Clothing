import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import {
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./directory-item-styles.jsx";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const onNavigateHandler = (route) => navigate(route);

  return (
    <>
      {category.map(({ id, title, imageUrl, route }) => {
        // const { id, title, imageUrl } = data;

        return (
          <DirectoryContainer key={id} onClick={() => onNavigateHandler(route)}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
              <h2>{title}</h2>
              <p>Shop now</p>
            </Body>
          </DirectoryContainer>
        );
      })}
    </>
  );
};

DirectoryItem.propTypes = {
  category: PropTypes.array.isRequired,
};
export default DirectoryItem;
