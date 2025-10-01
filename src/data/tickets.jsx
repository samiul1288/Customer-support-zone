const now = new Date();
const daysAgo = (d) => new Date(now.getTime() - d * 24 * 60 * 60 * 1000).toISOString();

export const seedTickets = [
  { id: "T-1001", title: "Login fails on Safari", description: "User cannot log in using Safari 17 on macOS.", customer: "Aster Corp", priority: "high", status: "new", createdAt: daysAgo(1) },
  { id: "T-1002", title: "Billing double charge", description: "Duplicate invoice for Sept.", customer: "BluePeak LLC", priority: "high", status: "new", createdAt: daysAgo(2) },
  { id: "T-1003", title: "Slow dashboard load", description: "Dashboard takes ~12s.", customer: "Nimbus Co", priority: "medium", status: "new", createdAt: daysAgo(3) },
  { id: "T-1004", title: "Webhook 500 errors", description: "order.created failing.", customer: "Horizon Foods", priority: "high", status: "new", createdAt: daysAgo(5) },
  { id: "T-1005", title: "Can’t export CSV", description: "Export disabled >5k rows.", customer: "Zephyr AI", priority: "medium", status: "new", createdAt: daysAgo(6) },
  { id: "T-1006", title: "2FA reset request", description: "Lost authenticator app.", customer: "Orchid Labs", priority: "low", status: "new", createdAt: daysAgo(8) },
  { id: "T-1007", title: "Email notifications delayed", description: "PW reset 20m late.", customer: "PolarTech", priority: "medium", status: "new", createdAt: daysAgo(9) },
  { id: "T-1008", title: "Mobile layout broken", description: "Header overlaps.", customer: "Sunrise Health", priority: "high", status: "new", createdAt: daysAgo(10) },
  { id: "T-1009", title: "SAML mapping issue", description: "Groups not syncing.", customer: "Delta Edu", priority: "medium", status: "new", createdAt: daysAgo(12) },
  { id: "T-1010", title: "Timezone mismatch", description: "Reports show UTC.", customer: "Quasar Retail", priority: "low", status: "new", createdAt: daysAgo(13) },
  { id: "T-1011", title: "Broken link in footer", description: "Careers 404.", customer: "Aurora Bank", priority: "low", status: "new", createdAt: daysAgo(14) },
  { id: "T-1012", title: "Import stuck", description: "Large import hangs.", customer: "Cobalt HR", priority: "high", status: "new", createdAt: daysAgo(15) },
];
