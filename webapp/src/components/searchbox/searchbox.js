import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchAction } from "../../redux/search/searchAction";
import deleteinput from "../../img/deletedinput.png";

const Searchbox = () => {
  const searchres = useSelector((state) => state.ProductsReducer.data);
  const dispatch = useDispatch();
  const [query, setQuery] = useState();
  const [active, setActive] = useState(0);
  const { searchdata } = useSelector((state) => state.searchReduser);
  const keyhandeler = (e) => {
    if (e.which === 38) {
      setActive((prvstate) => prvstate - 1);
    } else if (e.which === 40) {
      if (active < searchres.length) {
        setActive((prvstate) => prvstate + 1);
      } else {
        setActive(searchres.length - 1);
      }
      console.log("down");
    }
  };

  useEffect(() => {
    if (!query) {
      dispatch(searchAction());
    } else {
      const searchtemp = searchres.filter((item) => item.title.includes(query));
      console.log("searchdata", searchdata);
      dispatch(searchAction(searchtemp));
    }
  }, [query]);

  return (
    <div className="searchbox">
      <input
        onKeyUp={keyhandeler}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="...جستوجو کنید"
        style={{ textAlign: "right", width: 350, height: 40 }}
        className="icon"
      />

      <ul className="searchul">
        {searchdata?.map((item) => (
          <li key={item.id}>
            {`${active === item ? "backgroundColor:red" : ""}`}

            {item.title}
          </li>
        ))}
      </ul>
      {/* {searchres
            ? searchres?.map((item, index) => (
                <li
                  style={{ padding: 8, backgroundColor: "#fff", width: "100%" }}
                  className={`${active === index ? "bg-success" : ""}`}
                >
                  {item.name}
                </li>
              ))
            : null} */}
    </div>
  );
};

export default Searchbox;
