const lineCtx = document.getElementById('bandwidth').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Bandwidth',
          data: [30, 45, 60, 40, 70],
          borderColor: 'blue',
          backgroundColor: 'lightblue',
          tension: 0.3,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Inactive users', 'New users'],
        datasets: [{
          label: 'Users',
          data: [12, 19, 3, 5, 9],
          backgroundColor: 'blue'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });