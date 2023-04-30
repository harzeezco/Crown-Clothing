import PropTypes from "prop-types";

const CategoryItem = ({ category }) => {
  console.log(category);
  return (
    <>
      {category.map((categoryData) => {
        const { id, title, imageUrl } = categoryData;
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
