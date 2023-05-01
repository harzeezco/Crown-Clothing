import PropTypes from "prop-types";
import CategoryItem from "../category-item/category-item.component";

const CategoryDirectory = ({ category }) => {
  return (
    <>
      <CategoryItem category={category} />
    </>
  );
};

CategoryDirectory.propTypes = {
  category: PropTypes.array.isRequired,
};

export default CategoryDirectory;
