import PropTypes from "prop-types";
import "./category-item-styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <>
      {category.map((data) => {
        const { id, title, imageUrl } = data;
        return (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>  
          </div>
        );
      })}
    </> 
  );
};

CategoryItem.propTypes = {
  category: PropTypes.array.isRequired,
};
export default CategoryItem;
