// src/components/Banner.jsx
import { useTickets } from "../context/TicketsContext.jsx";

export default function Banner() {
  const { stats } = useTickets();

  return (
    <section className="banner">
      <div className="container">
        <div className="stats">
          <div className="stat stat--progress">
            <span className="label">In-Progress</span>
            <span className="value">{stats.inProgress}</span>
          </div>

          <div className="stat stat--resolved">
            <span className="label">Resolved</span>
            <span className="value">{stats.resolved}</span>
          </div>
        </div>

        <div className="banner-hover-zone" />
      </div>
    </section>
  );
}
