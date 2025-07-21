// Bandwidth Line Chart
const bandwidthCtx = document.getElementById("bandwidthChart").getContext("2d");
new Chart(bandwidthCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Bandwidth (Mbps)",
        data: [30, 45, 60, 40, 70],
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.3,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// User Bar Chart
const usersCtx = document.getElementById("usersChart").getContext("2d");
new Chart(usersCtx, {
  type: "bar",
  data: {
    labels: ["Inactive Users", "Active Users"],
    datasets: [
      {
        label: "Users",
        data: [12, 58],
        backgroundColor: ["#999", "blue"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
