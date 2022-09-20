import { useState } from "react";
import { ContentRow } from "./ContentRow";
import { Divider } from "../UI/Divider.js";
import { ShowMore } from "../UI/ShowMore.js";

const Streams = (props) => {
  const title = props.title;
  const contents = props.contents;

  const [showMore, setShowMore] = useState(false);

  const showMoreContent = () => {
    setShowMore(true);
  };

  return (
    <article className="streams">
      <h2 className="streams__title">{title}</h2>
      <div className="streams__content content-row">
        {<ContentRow contentArray={contents} rowNum={1} />}
      </div>
      {showMore ? (
        <>
          <div className="streams__content content-row">
            {<ContentRow contentArray={contents} rowNum={2} />}
          </div>
          <Divider />
        </>
      ) : (
        <ShowMore onClick={showMoreContent} />
      )}
    </article>
  );
};

export { Streams };
