import PostForm, { postFormValidator } from "../components/PostForm";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import { createItem, getShop } from "../api/shop";
import { SignIn, useUser } from "@clerk/clerk-react";

export default function PostItem() {
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  const { isSignedIn } = useUser();

  return (
    <>
      {!isSignedIn ? (
        <SignIn />
      ) : (
        <>
          <h1 className="section-title">Create A New Shop Item</h1>
          <PostForm isSubmitting={isSubmitting} errors={errors} />
        </>
      )}
    </>
  );
}

function loader({ request: { signal } }) {
  return getShop({ signal });
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const desc = formData.get("description");
  const featured = formData.get("featured");
  const actual = formData.get("actualPrice");
  const sale = formData.get("salePrice");
  const length = formData.get("length");
  const width = formData.get("width");
  const height = formData.get("height");
  const fimg = formData.get("feature-img");

  const errors = postFormValidator({
    title,
    desc,
    actual,
    sale,
    fimg,
    length,
    width,
    height,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const shop = await createItem(
    {
      title,
      desc,
      featured,
      actual,
      sale,
      length,
      width,
      height,
      fimg,
    },
    { signal: request.signal }
  );

  return redirect(`/shop/${shop.id}`);
}

// eslint-disable-next-line react-refresh/only-export-components
export const newItem = {
  loader,
  action,
  element: <PostItem />,
};
