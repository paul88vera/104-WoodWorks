import { useState } from "react";
import { Form } from "react-router-dom";

export default function PostItem() {
  const [signedIn] = useState(true);
  return (
    <>
      {signedIn ? (
        <Form method="post" className="form">
          <div className="form-group">
            <div className="form-row">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />

              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"></textarea>
            </div>

            <div className="form-row">
              <label htmlFor="actualPrice">Actual Price</label>
              <input type="number" name="actualPrice" id="actualPrice" />

              <label htmlFor="salePrice">Sale Price</label>
              <input type="number" name="salePrice" id="salePrice" />
            </div>

            <div className="form-row">
              <h3>List Colors</h3>
              <label htmlFor="yellow">
                Yellow
                <input type="checkbox" name="yellow" />
              </label>
              <br />
              <label htmlFor="red">
                Red
                <input type="checkbox" name="red" />
              </label>
              <br />
              <label htmlFor="green">
                Green
                <input type="checkbox" name="green" />
              </label>
            </div>

            <div className="form-row">
              <h3>List Finishes</h3>
              <label htmlFor="dark-brown">
                Dark Brown <input type="checkbox" name="dark-brown" />
              </label>
              <br />
              <label htmlFor="brown">
                Brown <input type="checkbox" name="brown" />
              </label>
              <br />
              <label htmlFor="light-brown">
                Light Brown <input type="checkbox" name="light-brown" />
              </label>
            </div>

            <div className="form-row">
              <h3>Specifications</h3>
              <h4>Dimensions</h4>
              <label htmlFor="length">
                Length <input type="number" name="length" />
                in.
              </label>
              <br />
              <label htmlFor="width">
                Width <input type="number" name="width" />
                in.
              </label>
              <br />
              <label htmlFor="height">
                Height <input type="number" name="height" />
                in.
              </label>
            </div>

            <div className="form-row">
              <h4>Features</h4>
              <label htmlFor="feature-title">
                Feature Title
                <input type="text" name="feature-title" id="feature-title" />
              </label>
              <br />
              <label htmlFor="feature-description">
                Feature Description
                <input
                  type="text"
                  name="feature-description"
                  id="feature-description"
                />
              </label>
              <br />
              <label htmlFor="feature-img">
                Feature Icon
                <input type="file" name="feature-img" id="feature-img" />
                (Only SVG or PNG files)
              </label>
              <br />
            </div>
          </div>

          <button className="btn">Submit</button>
        </Form>
      ) : null}
    </>
  );
}
