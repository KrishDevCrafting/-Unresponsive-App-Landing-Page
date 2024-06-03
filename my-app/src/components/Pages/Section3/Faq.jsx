import React from 'react';
import "../Section3/Faq.css"
import img from "./Asset/Frame.png"
import mail from "./Asset/Vector.png"
import PhoneIcon from "./Asset/VectorPhone.png"
import Fire from "./Asset/FrameFire.png"
const Faq = () => {
    return (
      <>
        <section>
          <div className="parent-1">
            <h5 id="faq-text">FAQ</h5>
            <h1 id="head">
              Frequently asked <br />
              questions
            </h1>
          </div>
        </section>
        <section>
          <div className="parent-2">
            <div className="child-1 box-color-1">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="child-1 font-color">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text" className="text-color">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="parent-2">
            <div className="child-1 font-color">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text" className="text-color">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="child-1 box-color-1">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="parent-2">
            <div className="child-1 box-color-1">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="child-1 font-color">
              <h1 id="style-head">the best financial accounting app ever!</h1>
              <p id="style-text" className="text-color">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </section>
        <section className="align-img">
          <img src={img} alt="img" srcset="" />
        </section>

        <section>
          <footer>
            <div className="end-main">
              <div className="box-end">
                <h3>
                  <img src={Fire} id="align-img" alt="img" />
                  uifry
                </h3>
                <p>
                  <img src={mail} alt="img" id="align-img" />
                  help@frybix.com
                </p>
                <p>
                  <img src={PhoneIcon} alt="img" id="align-img" />
                  +1 234 456 678 89
                </p>
              </div>
              <div className="box-end">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="http://">Home</a>
                  </li>
                  <li>
                    <a href="http://">About us</a>
                  </li>
                  <li>
                    <a href="http://">Booking</a>
                  </li>
                  <li>
                    <a href="http://">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="box-end">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="http://">Terms of Use</a>
                  </li>
                  <li>
                    <a href="http://">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="http://">Cookie Policy</a>
                  </li>
                </ul>
              </div>
              <div className="box-end">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="http://">Live Chat</a>
                  </li>
                  <li>
                    <a href="http://">Reviews</a>
                  </li>
                </ul>
              </div>

              <div className="box-end">
                <h4>Newsletter</h4>
                <ul>
                  <li>StayUp To Date</li>
                </ul>
                <input
                  type="email"
                  name="Email"
                  id="newsletter-email"
                  placeholder='Your Email'
                  className="transparent-input"
                />
                <button id="sub">Subscribe</button>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
}
 
export default Faq;