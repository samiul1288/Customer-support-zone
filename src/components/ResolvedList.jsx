import { useTickets } from "../context/TicketsContext.jsx";

export default function ResolvedList() {
  const { resolved, tickets } = useTickets();
  const get = (id) => tickets.find((t) => t.id === id);

  return (
    <ul className="clean-list">
      {resolved.length === 0 && <li className="empty">No resolved task yet</li>}
      {resolved.map((id) => {
        const t = get(id);
        if (!t) return null;
        return (
          <li key={id} className="row">
            <div className="dot" />
            <div style={{ flex: 1 }}>
              <p className="row-title">{t.title}</p>
              <p className="muted" style={{ margin: 0, fontSize: 13 }}>
                {t.customer} • Resolved
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
