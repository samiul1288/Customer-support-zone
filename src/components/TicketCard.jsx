import { useTickets } from "../context/TicketsContext.jsx";

const priorityBadge = (p) => {
  const map = { low: "badge low", medium: "badge mid", high: "badge high" };
  const label = {
    low: "LOW PRIORITY",
    medium: "MEDIUM PRIORITY",
    high: "HIGH PRIORITY",
  };
  return <span className={map[p] || "badge"}>{label[p] || p}</span>;
};

const statusBadge = (status) => {
  const map = {
    new: "badge open",
    open: "badge open",
    "in-progress": "badge ongoing",
  };
  const label = {
    new: "Open",
    open: "Open",
    "in-progress": "In-Progress",
  };
  return (
    <span className={map[status] || "badge"}>{label[status] || status}</span>
  );
};
function IconCalendar() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="meta-calendar-icon"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="9"
        y1="3"
        x2="9"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="3"
        x2="15"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function TicketCard({ t }) {
  const { addToInProgress } = useTickets();
  const when = new Date(t.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article
      className="ticket-card"
      onClick={() => addToInProgress(t.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && addToInProgress(t.id)}
    >
      <div className="ticket-head">
        <h3 className="ticket-title">{t.title}</h3>
        {statusBadge(t.status || "open")}
      </div>

      <p className="ticket-desc">{t.description}</p>

      <div className="meta">
        <div className="meta-left">
          <span className="muted">#{t.id}</span>
          {priorityBadge(t.priority)}
        </div>

        <div className="meta-right">
          <span className="muted">{t.customer}</span>
          <span className="meta-date">
            <IconCalendar />
            {when}
          </span>
        </div>
      </div>
    </article>
  );
}
