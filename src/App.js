import "./App.scss";
// import axios from "axios";

const App = () => {
  // const twitchAPI = axios.create({
  //   headers: {
  //     Authorization: "Bearer veemgsu384i20g5yp8yjrb04198zlz",
  //     "Client-Id": "95n6aprvq0p87raezjptqic51b6944",
  //   },
  // });

  return (
    <>
      <div className="page-wrapper home">
        <header>Header</header>
        <aside>Sidebar</aside>
        <main>
          <article className="featured-livestream">Featured livestream</article>
          <article className="category">
            <h2 className="category__title">Category title</h2>
            <div className="category__content">category content</div>
          </article>
        </main>
      </div>
    </>
  );
};

export { App };
