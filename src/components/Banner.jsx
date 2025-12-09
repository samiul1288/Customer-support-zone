import { useTickets } from "../context/TicketsContext.jsx";

export default function Banner() {
  const { stats } = useTickets();

  const handleClickProgress = () => {
    console.log("In-Progress clicked");
  };

  const handleClickResolved = () => {
    console.log("Resolved clicked");
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="banner-inner">
          <button
            type="button"
            className="banner-left"
            onClick={handleClickProgress}
          >
            <span className="banner-label">In-Progress</span>
            <span className="banner-value">{stats.inProgress}</span>
          </button>

          <button
            type="button"
            className="banner-right"
            onClick={handleClickResolved}
          >
            <span className="banner-label">Resolved</span>
            <span className="banner-value">{stats.resolved}</span>
          </button>
        </div>
        <div className="banner-hover-zone" />
      </div>
    </section>
  );
}
