import { Link, useLoaderData } from "react-router-dom";
import { getShopItem } from "../api/shop";

export default function ShopItem() {
  const item = useLoaderData();

  return (
    <div className="item-container">
      <div>
        <Link className="btn submit-btn" to={`/shop/${item.id}/edit`}>
          Edit
        </Link>
      </div>
      <img src="/wooden_chair.jpg" width="30%" />
      <div className="descriptions">
        <h2>{item.title}</h2>
        <p>
          {item.sale} | {item.actual}
        </p>
        <br />
        <div>
          <h5>Colors:</h5>
          {item.c1 != "" ? (
            <input type="color" name="c1" id="c1" value={item.c1} disabled />
          ) : undefined}
          <br />
          {item.c2 != "" ? (
            <input type="color" name="c2" id="c2" value={item.c2} disabled />
          ) : undefined}
          <br />
          {item.c3 != "" ? (
            <input type="color" name="c3" id="c3" value={item.c3} disabled />
          ) : undefined}
        </div>
        <br />

        <div>
          <h5>Finishes:</h5>
          {item.f1 != "" ? (
            <input type="color" name="f1" id="f1" value={item.f1} disabled />
          ) : undefined}
          <br />
          {item.f2 != "" ? (
            <input type="color" name="f2" id="f2" value={item.f2} disabled />
          ) : undefined}
          <br />
          {item.f3 != "" ? (
            <input type="color" name="f3" id="f3" value={item.f3} disabled />
          ) : undefined}
        </div>

        <br />
        <h5>Description:</h5>
        <p>{item.desc}</p>
      </div>
      <br />
      <div className="dimensions">
        <h2>Dimensions</h2>
        <h5>Length:</h5>
        {item.length} inches
        <h5>Width:</h5>
        {item.width} inches
        <h5>Height:</h5>
        {item.height} inches
      </div>
      <br />
      <div className="featured">
        <h5>Feature Title:</h5>
        <p>{item.ftitle}</p>
        <br />
        <h5>Featured Description:</h5>
        <p>{item.fdesc}</p>
      </div>
    </div>
  );
}

async function loader({ request: { signal }, params: { id } }) {
  return await getShopItem(id, { signal });
}

export const shopItem = {
  loader,
  element: <ShopItem />,
};
