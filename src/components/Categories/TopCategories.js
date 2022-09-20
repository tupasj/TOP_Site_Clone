import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";
import { Divider } from "../UI/Divider";

const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    const getTopCategoriesInfo = async () => {
      const topCategoriesArray = await twitchAPI.fetchTopCategories();
      setTopCategories(topCategoriesArray);
    };
    getTopCategoriesInfo();
  }, []);

  return (
    <article className="top-categories">
      <h2 className="top-categories__title">
        <span className="top-categories__title--purple">Categories</span> we
        think you'll like
      </h2>
      <div className="top-categories__contents">
        {topCategories[0] &&
          topCategories.map((item) => {
            return (
              <div
                key={item.title}
                className="top-categories__contents__category"
              >
                <img
                  className="top-categories__contents__category__img"
                  src={`${item.img}`}
                  alt={`${item.title} box art`}
                ></img>
                <div className="top-categories__contents__category__title">
                  {item.title}
                </div>
              </div>
            );
          })}
      </div>
      <Divider />
    </article>
  );
};

export { TopCategories };
