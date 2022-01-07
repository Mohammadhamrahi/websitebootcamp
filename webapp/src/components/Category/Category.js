import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productcategoryAction from "../../redux/productcategory/productcategoryAction";
import "./Style.scss";

const Category = () => {
  const { category } = useSelector((state) => state.ProductcategoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productcategoryAction.getCategory(category));
  }, []);

  return (
    <div className="container">
      محصولات
      <ul>
        {category.map((item, index) => (
          <Link key={index} to={`/category/${item}`}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Category;
