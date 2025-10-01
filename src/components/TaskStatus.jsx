import { useTickets } from "../context/TicketsContext.jsx";

export default function TaskStatus() {
  const { inProgress, tickets, completeTicket } = useTickets();
  const find = (id) => tickets.find((t) => t.id === id);

  return (
    <ul className="clean-list">
      {inProgress.length === 0 && (
        <li className="empty">No ticket added to Task Status</li>
      )}
      {inProgress.map((id) => {
        const t = find(id);
        if (!t) return null;
        return (
          <li key={id} className="row">
            <div style={{ flex: 1 }}>
              <p className="row-title">{t.title}</p>
              <p className="muted" style={{ margin: 0, fontSize: 13 }}>{t.customer}</p>
            </div>
            {/* তোমার CSS-এ .btn.success নেই, তাই primary ব্যবহার করছি */}
            <button className="btn primary" onClick={() => completeTicket(id)}>
              Complete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
