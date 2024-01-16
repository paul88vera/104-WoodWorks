import { useLoaderData } from "react-router-dom";
import { getShopItem } from "../api/shop";

export default function ShopItem() {
  const item = useLoaderData();
  return (
    <div className="item-container">
      <img src={item.fimg} />
      <div className="descriptions">
        <h2>{item.title}</h2>
        <p>
          {item.sale} | {item.actual}
        </p>
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
