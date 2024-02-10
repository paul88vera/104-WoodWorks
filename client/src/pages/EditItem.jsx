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
          <button className="btn" onClick={toggleDeleteModalOpen}>
            Delete
          </button>
          <PostForm
            defaultValues={item}
            isSubmitting={isSubmitting}
            errors={errors}
          />
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
  const fdesc = formData.get("feature-title");
  const fimg = formData.get("feature-img");
  const c1 = formData.get("colorOne");
  const c2 = formData.get("colorTwo");
  const c3 = formData.get("colorThree");
  const f1 = formData.get("finishOne");
  const f2 = formData.get("finishTwo");
  const f3 = formData.get("finishThree");

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
    c1,
    f1,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const item = await updateItem(
    id,
    {
      title,
      desc,
      actual,
      sale,
      length,
      width,
      height,
      fimg,
      ftitle,
      fdesc,
      c1,
      c2,
      c3,
      f1,
      f2,
      f3,
    },
    { signal: request.signal }
  );

  return redirect(`/shop/${item.id}`);
}

function loader({ request: { signal }, params: { id } }) {
  return getShopItem(id, { signal });
}

export const editItem = {
  loader,
  action,
  element: <EditItem />,
};
