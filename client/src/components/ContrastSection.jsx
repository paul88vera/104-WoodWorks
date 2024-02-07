import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineTableBar } from "react-icons/md";
import { BsTree } from "react-icons/bs";

export default function ContrastSection() {
  return (
    <div className="contrast-section">
      <h2 className="section-title">
        We&apos;re solving the biggest problems in furniture
      </h2>

      <div className="block-main-container">
        <div className="block-container">
          <div>
            <CiDeliveryTruck
              className="icon-sizer"
              // style={{ marginRight: "-10px" }}
            />
          </div>
          <div className="inner-block-container">
            <p className="inner-block-title">Fast & free shipping</p>
            <p>
              Every single order ships for free. No minimums, no tiers, no fine
              print whatsoever.
            </p>
          </div>
        </div>

        <div className="block-container">
          <div>
            <MdOutlineTableBar className="icon-sizer" />
          </div>
          <div className="inner-block-container">
            <p className="inner-block-title">Modular, easy-to-move design</p>
            <p>
              Our innovative modular design is driven by the belief that
              furniture should fit this home, and the next one.
            </p>
          </div>
        </div>

        <div className="block-container">
          <div>
            <BsTree className="icon-sizer" />
          </div>
          <div className="inner-block-container">
            <p className="inner-block-title">Durable, premium materials</p>
            <p>
              We use materials like sustainably-forested wood, strengthened
              steel hardware, and top-grain Italian leather.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
