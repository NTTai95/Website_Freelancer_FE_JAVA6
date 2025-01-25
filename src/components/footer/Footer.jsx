import scss from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className={scss.footer_area}>
      <div className={scss.container}>
        <div className={scss.row}>
          {/* Single Widget */}
          <div className={`${scss.col} ${scss.colLg4}`}>
            <div
              className={`${scss.single_footer_widget} ${scss.section_padding}`}
            >
              <div className={scss.footer_logo}></div>
              <p>
                Appland is completely creative, lightweight, clean app landing
                page.
              </p>
              <div className={scss.copywrite_text}>
                <p>
                  Made with by
                  <a href="https://wrapbootstrap.com/user/DesigningWorld">
                    Designing World
                  </a>
                </p>
              </div>
              <div className={scss.footer_social_area}>
                <a href="#" title="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" title="Pinterest">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="#" title="Skype">
                  <FontAwesomeIcon icon={faSkype} />
                </a>
                <a href="#" title="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>

          {/* About Widget */}
          <div className={scss.col}>
            <div
              className={`${scss.single_footer_widget} ${scss.section_padding}`}
            >
              <h5 className={scss.widget_title}>About</h5>
              <div className={scss.footer_menu}>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Corporate Sale</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Widget */}
          <div className={scss.col}>
            <div
              className={`${scss.single_footer_widget} ${scss.section_padding}`}
            >
              <h5 className={scss.widget_title}>Support</h5>
              <div className={scss.footer_menu}>
                <ul>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Widget */}
          <div className={scss.col}>
            <div
              className={`${scss.single_footer_widget} ${scss.section_padding}`}
            >
              <h5 className={scss.widget_title}>Contact</h5>
              <div className={scss.footer_menu}>
                <ul>
                  <li>
                    <a href="#">Call Centre</a>
                  </li>
                  <li>
                    <a href="#">Email Us</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
