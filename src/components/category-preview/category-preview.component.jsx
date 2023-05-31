import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

import "./category-preview.styles.scss";
import ProductCard from "../productCard/productCard-component";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleCategoryPreview = () => navigate(`/shop/${title}`);

  return (
    <div className="category-preview-container">
      <h2>
        <span onClick={handleCategoryPreview} className="title">
          {title.toUpperCase()}
        </span>
      </h2>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default CategoryPreview;
