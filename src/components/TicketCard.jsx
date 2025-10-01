import { useTickets } from "../context/TicketsContext.jsx";

const priorityBadge = (p) => {
  const map = { low: "badge low", medium: "badge mid", high: "badge high" };
  const label = { low: "LOW PRIORITY", medium: "MEDIUM PRIORITY", high: "HIGH PRIORITY" };
  return <span className={map[p] || "badge"}>{label[p] || p}</span>;
};

const statusBadge = (status) => {
  const map = { new: "badge open", open: "badge open", "in-progress": "badge ongoing" };
  const label = { new: "Open", open: "Open", "in-progress": "In-Progress" };
  return <span className={map[status] || "badge"}>{label[status] || status}</span>;
};

export default function TicketCard({ t }) {
  const { addToInProgress } = useTickets();
  const when = new Date(t.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  return (
    <article className="ticket-card" onClick={() => addToInProgress(t.id)}>
      <div className="ticket-head">
        <h3 className="ticket-title">{t.title}</h3>
        {statusBadge(t.status || "open")}
      </div>

      <p className="ticket-desc">{t.description}</p>

      <div className="meta">
        <span className="muted">#{t.id}</span>
        {priorityBadge(t.priority)}
        <span className="muted">{t.customer}</span>
        <span className="muted">{when}</span>
      </div>
    </article>
  );
}
