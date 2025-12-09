import { createContext, useContext, useState, useMemo } from "react";
import { toast } from "react-toastify";
import initialTickets from "../data/tickets.jsx";

const TicketsContext = createContext();

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]); // ids
  const [resolved, setResolved] = useState([]); // ids

  const addToInProgress = (id) => {
    setInProgress((prev) => {
      if (prev.includes(id) || resolved.includes(id)) {
        toast.info("This ticket is already being tracked.", {
          icon: "ℹ️",
          toastId: `tracked-${id}`,
        });
        return prev;
      }

      toast.info("Ticket added to Task Status.", {
        icon: "📝",
        toastId: `added-${id}`,
      });

      return [...prev, id];
    });
  };

  const completeTicket = (id) => {
    setInProgress((prev) => prev.filter((tid) => tid !== id));

    setResolved((prev) => {
      if (!prev.includes(id)) {
        toast.success("Ticket marked as resolved.", {
          toastId: `resolved-${id}`,
          icon: "✅",
        });
        return [...prev, id];
      }
      return prev;
    });

    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const createNewTicket = () => {
    const nextId =
      tickets.length > 0 ? Math.max(...tickets.map((t) => t.id)) + 1 : 1001;

    const ticket = {
      id: nextId,
      title: "New Support Ticket",
      description: "This is a placeholder ticket created from the navbar.",
      customer: "New Customer",
      priority: "low",
      status: "open",
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setTickets((prev) => [ticket, ...prev]);

    toast("New ticket created.", {
      icon: "➕",
      toastId: `new-ticket-${nextId}`,
    });
  };

  const stats = useMemo(
    () => ({
      inProgress: inProgress.length,
      resolved: resolved.length,
    }),
    [inProgress.length, resolved.length]
  );

  const visibleTickets = tickets;

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

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
}

export function useTickets() {
  const ctx = useContext(TicketsContext);
  if (!ctx) throw new Error("useTickets must be used within TicketsProvider");
  return ctx;
}
