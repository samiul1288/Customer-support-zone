import { TicketsProvider } from "./context/TicketsContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import TicketCard from "./components/TicketCard.jsx";
import TaskStatus from "./components/TaskStatus.jsx";
import ResolvedList from "./components/ResolvedList.jsx";
import Footer from "./components/Footer.jsx";
import { useTickets } from "./context/TicketsContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** Left column: 5 rows × 2 columns = 10 tickets */
function TicketsGrid() {
  const { visibleTickets } = useTickets();

  return (
    <section className="box">
      <div className="box-head">Customer Tickets</div>

      <div className="ticket-grid">
        {visibleTickets.slice(0, 10).map((t) => (
          <TicketCard key={t.id} t={t} />
        ))}
        {visibleTickets.length === 0 && (
          <div className="empty">All tickets are resolved 🎉</div>
        )}
      </div>

      <div className="box-foot">
        Click any ticket to add it to Task Status.
      </div>
    </section>
  );
}

export default function App() {
  return (
    <TicketsProvider>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar closeOnClick />
      <div className="app">
        <Navbar />
        <Banner />

        {/* Banner-এর পরে মূল দুই-কলামের লেআউট */}
        <main className="wrapper layout-grid">
          {/* Left: tickets grid */}
          <TicketsGrid />

          {/* Right: Task Status + Resolved */}
          <aside className="sidebar">
            <section className="box">
              <div className="box-head">Task Status</div>
              <TaskStatus />
            </section>

            <section className="box">
              <div className="box-head">Resolved Task</div>
              <ResolvedList />
            </section>
          </aside>
        </main>

        <Footer />
      </div>
    </TicketsProvider>
  );
}
