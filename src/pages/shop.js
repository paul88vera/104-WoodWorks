import Item from "../components/Item";

export default function Shop() {
  return (
    <section id="shop">
      <h2>Take a look at what we can create for you!</h2>
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
