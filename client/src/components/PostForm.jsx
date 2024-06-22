/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function PostForm({
  isSubmitting,
  errors = {},
  defaultValues = {},
}) {
  return (
    <Form method="post" className="form">
      <div className="form-container">
        <div className="form-row">
          <FormGroup errorMessage={errors.title}>
            <h3 className="section-title">Item Details</h3>
            <label className="form-label" htmlFor="title">
              Item Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={defaultValues.title}
            />
          </FormGroup>
          <FormGroup errorMessage={errors.desc}>
            <label className="form-label" htmlFor="description">
              Brief Description:
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              defaultValue={defaultValues.desc}></textarea>
          </FormGroup>
          <FormGroup>
            <label className="form-label" htmlFor="feartured">
              Is This A Featured Item (Max of three featured Items):
            </label>
            <input
              type="checkbox"
              name="featured"
              id="featured"
              value="true"
              defaultChecked="false"
            />
          </FormGroup>

          <FormGroup errorMessage={errors.actual}>
            <label className="form-label" htmlFor="actualPrice">
              Actual Price: (Dollars)
            </label>
            <input
              type="number"
              name="actualPrice"
              id="actualPrice"
              defaultValue={defaultValues.actual}
            />
          </FormGroup>

          <FormGroup errorMessage={errors.sale}>
            <label className="form-label" htmlFor="salePrice">
              Sale Price: (Dollars)
            </label>
            <input
              type="number"
              name="salePrice"
              id="salePrice"
              defaultValue={defaultValues.sale}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <label className="form-label" htmlFor="feature-img">
              Feature Image:
              <input
                type="file"
                name="feature-img"
                id="feature-img"
                defaultValue={defaultValues.fimg}
              />
              <br />
              (Only JPG or PNG files)
            </label>
          </FormGroup>
        </div>

        <div className="form-row">
          <h3 className="section-title">Specifications</h3>
          <FormGroup errorMessage={errors.length}>
            <label className="form-label" htmlFor="length">
              Length:{" "}
              <input
                type="number"
                name="length"
                id="length"
                defaultValue={defaultValues.length}
              />
              in.
            </label>
          </FormGroup>
          <br />
          <FormGroup errorMessage={errors.width}>
            <label className="form-label" htmlFor="width">
              Width:{" "}
              <input
                type="number"
                name="width"
                id="width"
                defaultValue={defaultValues.width}
              />
              in.
            </label>
          </FormGroup>
          <br />
          <FormGroup errorMessage={errors.height}>
            <label className="form-label" htmlFor="height">
              Height:{" "}
              <input
                type="number"
                name="height"
                id="height"
                defaultValue={defaultValues.height}
              />
              in.
            </label>
          </FormGroup>
        </div>
      </div>

      <div className="form-btn-container">
        <Link className="btn form-btn" to="/shop">
          Cancel
        </Link>
        <button className="btn submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export function postFormValidator({
  title,
  desc,
  actual,
  sale,
  length,
  width,
  height,
}) {
  const errors = {};

  if (title === "") {
    errors.title = "Required";
  }
  if (desc === "") {
    errors.desc = "Required";
  }
  if (actual === "") {
    errors.actual = "Required";
  }
  if (sale === "") {
    errors.sale = "Required";
  }
  if (length === "") {
    errors.length = "Required";
  }
  if (width === "") {
    errors.width = "Required";
  }
  if (height === "") {
    errors.height = "Required";
  }

  return errors;
}
