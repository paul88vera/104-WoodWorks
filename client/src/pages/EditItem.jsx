import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import PostForm, { postFormValidator } from "../components/PostForm";
import { getShopItem, updateItem } from "../api/shop";
import { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import { SignIn, useUser } from "@clerk/clerk-react";

export default function EditItem() {
  const item = useLoaderData();
  const errors = useActionData();
  const { state } = useNavigation();
  const { isSignedIn } = useUser();

  const isSubmitting = state === "submitting";
  const [deleteModal, setDeleteModal] = useState(false);

  function toggleDeleteModalOpen() {
    setDeleteModal((current) => !current);
  }
  function toggleDeleteModalClose() {
    setDeleteModal((current) => !current);
  }
  return (
    <div>
      {/* <h1 className="section-title">Edit Item</h1> */}
      {!isSignedIn ? (
        <SignIn />
      ) : (
        <>
          {deleteModal && (
            <DeleteModal
              item={item}
              toggleDeleteModalClose={toggleDeleteModalClose}
            />
          )}
          <PostForm
            defaultValues={item}
            isSubmitting={isSubmitting}
            errors={errors}
          />
          <div className="delete-container">
            <button className="btn delete-btn" onClick={toggleDeleteModalOpen}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

async function action({ request, params: { id } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const desc = formData.get("description");
  const actual = formData.get("actualPrice");
  const sale = formData.get("salePrice");
  const length = formData.get("length");
  const width = formData.get("width");
  const height = formData.get("height");
  const ftitle = formData.get("feature-title");
  const featured = formData.get("featured");
  const fdesc = formData.get("feature-title");
  const fimg = formData.get("feature-img");
  const quantity = formData.get("quantity");

  const errors = postFormValidator({
    title,
    desc,
    actual,
    sale,
    length,
    width,
    height,
    ftitle,
    fdesc,
    quantity,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const item = await updateItem(
    id,
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
      quantity,
    },
    { signal: request.signal }
  );

  return redirect(`/shop/${item.id}`);
}

function loader({ request: { signal }, params: { id } }) {
  return getShopItem(id, { signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const editItem = {
  loader,
  action,
  element: <EditItem />,
};
