import { Form } from "react-router-dom";
import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function PostForm({ isSubmitting, errors = {} }) {
  return (
    <Form method="post" className="form">
      <div className="form-row">
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description"></textarea>
        </FormGroup>
      </div>

      <div className="form-row">
        <FormGroup>
          <label htmlFor="actualPrice">Actual Price</label>
          <input type="number" name="actualPrice" id="actualPrice" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="salePrice">Sale Price</label>
          <input type="number" name="salePrice" id="salePrice" />
        </FormGroup>
      </div>

      <div className="form-row">
        <h3>List Colors</h3>
        <FormGroup>
          <label htmlFor="colorOne">
            Color One
            <input type="color" name="colorOne" id="colorOne" />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="colorTwo">
            Color Two
            <input type="color" name="colorTwo" id="colorTwo" />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="colorThree">
            Color Three
            <input type="color" name="colorThree" id="colorThree" />
          </label>
        </FormGroup>
      </div>

      <div className="form-row">
        <h3>List Finishes</h3>
        <FormGroup>
          <label htmlFor="dark-brown">
            Dark Brown <input type="checkbox" name="dark-brown" />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="brown">
            Brown <input type="checkbox" name="brown" />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="light-brown">
            Light Brown <input type="checkbox" name="light-brown" />
          </label>
        </FormGroup>
      </div>

      <div className="form-row">
        <h3>Specifications</h3>
        <h4>Dimensions</h4>
        <FormGroup>
          <label htmlFor="length">
            Length <input type="number" name="length" id="length" />
            in.
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="width">
            Width <input type="number" name="width" id="width" />
            in.
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="height">
            Height <input type="number" name="height" id="height" />
            in.
          </label>
        </FormGroup>
      </div>

      <div className="form-row">
        <h4>Features</h4>
        <FormGroup>
          <label htmlFor="feature-title">
            Feature Title
            <input type="text" name="feature-title" id="feature-title" />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="feature-description">
            Feature Description
            <input
              type="text"
              name="feature-description"
              id="feature-description"
            />
          </label>
        </FormGroup>
        <br />
        <FormGroup>
          <label htmlFor="feature-img">
            Feature Icon
            <input type="file" name="feature-img" id="feature-img" />
            (Only SVG or PNG files)
          </label>
        </FormGroup>
        <br />
      </div>

      <button className="btn" disabled={isSubmitting}>
        {isSubmitting ? "Loading" : "Save"}
      </button>
    </Form>
  );
}

export function postFormValidator({ title, desc, actual, sale, colorOne, colorTwo, colorThree }) {
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
  if (colorOne === "") {
    errors.colorOne = "Required";
  }
  if (colorTwo === "") {
    errors.colorTwo = "Required";
  }
  if (colorThree === "") {
    errors.colorThree = "Required";
  }

  return errors;
}
