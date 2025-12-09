import { useTickets } from "../context/TicketsContext.jsx";

export default function Navbar() {
  const { createNewTicket } = useTickets();

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <span className="logo-text">CS — Ticket System</span>
        </div>

        <nav className="menu" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#changelog">Changelog</a>
          <a href="#blog">Blog</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>

          <button
            type="button"
            className="btn primary"
            onClick={createNewTicket}
          >
            New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}
