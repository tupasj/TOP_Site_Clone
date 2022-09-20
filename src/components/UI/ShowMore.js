const ShowMore = (props) => {
  const onClick = props.onClick;

  return (
    <div className="ui__show-more">
      <span className="ui__show-more__line"></span>
      <span className="ui__show-more__text" onClick={onClick}>
        Show more
        <i className="ui__show-more__icon fa-solid fa-chevron-down"></i>
      </span>
      <span className="ui__show-more__line"></span>
    </div>
  );
};

export { ShowMore };
