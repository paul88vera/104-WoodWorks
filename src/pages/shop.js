import Item from "../components/Item";

export default function Shop() {
  return (
    <section id="shop">
      {/* <img src="https://unsplash.it/1100/300" alt="fav-build"  width="100%"/> */}
      <h2>Take a look at what we can create for you!</h2>
      <h4 align="center">Filter Your Search<br/>--</h4>
      <div id="selection-container">
        <a href="#">all</a>
        <a href="#">kennels</a>
        <a href="#">tables</a>
        <a href="#">chairs</a>
        <a href="#">misc</a>
      </div>
      <div className="card-container">
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
        <div className="card">
          <Item />
        </div>
      </div>
    </section>
  );
}
