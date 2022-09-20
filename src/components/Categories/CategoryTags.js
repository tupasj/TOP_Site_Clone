const CategoryTags = () => {
  return (
    <article className="category-tags">
      <div className="category-tags__category-tag">
        <span className="category-tags__category-tag__title">Games</span>
        <i className="category-tags__category-tag__icon fa-solid fa-gamepad"></i>
      </div>
      <div className="category-tags__category-tag">
        <span className="category-tags__category-tag__title">IRL</span>
        <i className="category-tags__category-tag__icon fa-solid fa-microphone-lines"></i>
      </div>
      <div className="category-tags__category-tag">
        <span className="category-tags__category-tag__title">Music</span>
        <i className="category-tags__category-tag__icon fa-solid fa-headphones"></i>
      </div>
      <div className="category-tags__category-tag">
        <span className="category-tags__category-tag__title">Esports</span>
        <i className="category-tags__category-tag__icon fa-solid fa-trophy"></i>
      </div>
      <div className="category-tags__category-tag">
        <span className="category-tags__category-tag__title">Creative</span>
        <i className="category-tags__category-tag__icon fa-solid fa-palette"></i>
      </div>
    </article>
  );
};

export { CategoryTags };
