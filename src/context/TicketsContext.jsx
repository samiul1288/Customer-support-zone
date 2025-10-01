import { createContext, useContext, useMemo, useState } from "react";
import { seedTickets as initial } from "../data/tickets.jsx";
import { toast } from "react-toastify";

const Ctx = createContext(null);

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(initial);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  

  const stats = useMemo(
    () => ({ inProgress: inProgress.length, resolved: resolved.length }),
    [inProgress, resolved]
  );

  const visibleTickets = useMemo(
    () => tickets.filter((t) => !resolved.includes(t.id)),
    [tickets, resolved]
  );

  const addToInProgress = (id) => {
    if (resolved.includes(id)) return;
    if (inProgress.includes(id)) {
      toast.info("Already in progress");
      return;
    }
    setInProgress((prev) => [...prev, id]);
    toast.success("Moved to In Progress");
  };

  const completeTicket = (id) => {
    if (resolved.includes(id)) return;
    setResolved((prev) => [...prev, id]);
    setInProgress((prev) => prev.filter((x) => x !== id));
    setTickets((prev) => prev.filter((t) => t.id !== id));
    toast.success("Marked as Resolved");
  };

  const createNewTicket = () => {
    const next = tickets.length + resolved.length + 1001;
    const id = `T-${next}`;
    const customers = ["Aster Corp", "BluePeak LLC", "Nimbus Co", "Horizon Foods", "Zephyr AI"];
    const priorities = ["low", "medium", "high"];
    const t = {
      id,
      title: "New support request",
      description: "Created via New Ticket button.",
      customer: customers[Math.floor(Math.random() * customers.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      status: "new",
      createdAt: new Date().toISOString(),
    };
    setTickets((prev) => [t, ...prev]);
    toast("New ticket created");
  };

  const value = {
    tickets,
    visibleTickets,
    inProgress,
    resolved,
    stats,
    addToInProgress,
    completeTicket,
    createNewTicket,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// ডিফেন্সিভ হুক: Provider ছাড়া ব্যবহার করলে হেল্পফুল এরর দেবে
export const useTickets = () => {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useTickets must be used within <TicketsProvider>");
  }
  return ctx;
};
