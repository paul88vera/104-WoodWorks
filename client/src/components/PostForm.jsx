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
      <div className="form-row">
        <FormGroup errorMessage={errors.title}>
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
      </div>

      <div className="form-row">
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
      </div>

      <div className="form-row">
        <h4>List Colors</h4>
        <FormGroup errorMessage={errors.c1}>
          <label className="form-label" htmlFor="colorOne">
            Color One:
            <input
              type="color"
              name="colorOne"
              id="colorOne"
              defaultValue={defaultValues.c1}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup errorMessage={errors.c2}>
          <label className="form-label" htmlFor="colorTwo">
            Color Two:
            <input
              type="color"
              name="colorTwo"
              id="colorTwo"
              defaultValue={defaultValues.c2}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup errorMessage={errors.c3}>
          <label className="form-label" htmlFor="colorThree">
            Color Three:
            <input
              type="color"
              name="colorThree"
              id="colorThree"
              defaultValue={defaultValues.c3}
            />
          </label>
        </FormGroup>
      </div>

      <div className="form-row">
        <h4>List Finishes</h4>
        <FormGroup errorMessage={errors.f1}>
          <label className="form-label" htmlFor="finishOne">
            Finish One:{" "}
            <input
              type="color"
              name="finishOne"
              defaultValue={defaultValues.f1}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup errorMessage={errors.f2}>
          <label className="form-label" htmlFor="finishTwo">
            Finish Two:{" "}
            <input
              type="color"
              name="finishTwo"
              defaultValue={defaultValues.f2}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup errorMessage={errors.f3}>
          <label className="form-label" htmlFor="finishThree">
            Finish Three:{" "}
            <input
              type="color"
              name="finishThree"
              defaultValue={defaultValues.f3}
            />
          </label>
        </FormGroup>
      </div>

      <div className="form-row">
        <h3 className="section-title">Specifications</h3>
        <h4>Dimensions</h4>
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

      <div className="form-row">
        <h4>Features</h4>
        <FormGroup errorMessage={errors.ftitle}>
          <label className="form-label" htmlFor="feature-title">
            Feature Title:
            <input
              type="text"
              name="feature-title"
              id="feature-title"
              defaultValue={defaultValues.ftitle}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup errorMessage={errors.fdesc}>
          <label className="form-label" htmlFor="feature-description">
            Feature Description:
            <input
              type="text"
              name="feature-description"
              id="feature-description"
              defaultValue={defaultValues.fdesc}
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label className="form-label" htmlFor="feature-img">
            Feature Icon:
            <input
              type="file"
              name="feature-img"
              id="feature-img"
              defaultValue={defaultValues.fimg}
            />
            <br />
            (Only SVG or PNG files)
          </label>
        </FormGroup>
        <br />
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
  ftitle,
  fdesc,
  length,
  width,
  height,
  colorOne,
  finishOne,
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
  if (ftitle === "") {
    errors.ftitle = "Required";
  }
  if (fdesc === "") {
    errors.fdesc = "Required";
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
  if (colorOne === "") {
    errors.colorOne = "Required";
  }
  if (finishOne === "") {
    errors.finishOne = "Required";
  }

  return errors;
}
