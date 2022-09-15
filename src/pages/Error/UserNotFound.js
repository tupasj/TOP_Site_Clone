const UserNotFound = () => {
  return (
    <div className="user-not-found">
      <i className="user-not-found__icon header-left__icon--robot fa-solid fa-robot"></i>
      <p className="user-not-found__text">User not found</p>
      <p className="user-not-found__text">Try checking spelling or search for a different user</p>
    </div>
  );
};

export { UserNotFound };
