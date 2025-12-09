
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrapper footer-top">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">CS — Ticket System</h3>
            <p className="footer-blurb">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <nav className="footer-col" aria-label="Company">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#mission">Our Mission</a>
              </li>
              <li>
                <a href="#contact-sales">Contact Sales</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#products">Products &amp; Services</a>
              </li>
              <li>
                <a href="#stories">Customer Stories</a>
              </li>
              <li>
                <a href="#apps">Download Apps</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Information">
            <h4 className="footer-title">Information</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#careers">Join Us</a>
              </li>
            </ul>
          </nav>

          <div className="footer-col">
            <h4 className="footer-title">Social Links</h4>
            <ul className="footer-links social">
              <li>
                <a href="https://twitter.com" aria-label="X / Twitter">
                  <IconTwitter /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="https://facebook.com" aria-label="Facebook">
                  <IconFacebook /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <IconLinkedIn /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="mailto:support@cst.com" aria-label="Email">
                  <IconMail /> support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-outline" aria-hidden="true" />
      </div>

      <div className="footer-bottom">
        <div className="wrapper">
          <p>© {year} CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function IconTwitter() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: 8, opacity: 0.9 }}
    >
      <path d="M18 2H14L9 9.5L4 2H0L7.5 12L0 22H4L9 14.5L14 22H18L10.5 12L18 2Z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: 8, opacity: 0.9 }}
    >
      <path
        d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 
      3.66 9.13 8.44 9.88v-7H8v-3h2.44V9.5c0-2.43 1.46-3.76 
      3.67-3.76 1.06 0 2.17.19 2.17.19v2.38H15c-1.24 
      0-1.63.77-1.63 1.56V12H16.8l-.48 3h-2.95v7C18.34 
      21.13 22 17 22 12z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: 8, opacity: 0.9 }}
    >
      <path
        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 
      19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 
      5 3H19M8.34 17V10.34H6V17H8.34M7.17 
      9.25C8 9.25 8.67 8.58 8.67 7.75C8.67 
      6.92 8 6.25 7.17 6.25C6.34 6.25 5.67 
      6.92 5.67 7.75C5.67 8.58 6.34 9.25 
      7.17 9.25M18 17V13.25C18 11.6 17.34 
      10.34 15.59 10.34C14.67 10.34 14.05 
      10.84 13.8 11.3H13.75V10.34H11.5V17H13.84V13.54C13.84 
      12.84 14.05 12.25 14.8 12.25C15.54 12.25 15.75 12.84 
      15.75 13.54V17H18Z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: 8, opacity: 0.9 }}
    >
      <path
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 
      2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 
      18.25 20H5.75A2.75 2.75 0 0 1 3 
      17.25V6.75zm2.31-.25 6.17 4.11 6.21-4.11H5.31z"
      />
    </svg>
  );
}
