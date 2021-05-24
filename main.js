const ctx1 = document.getElementById('firstChart').getContext('2d');
const ctx2 = document.getElementById('secondChart').getContext('2d');

const conf1 = {
  type: 'bar',
  data: {
    labels: ['JavaScript', 'Java', 'C#', 'Python', 'PHP', 'C++', 'TypeScript', 'Swift', 'Kotlin'],
    datasets: [
      {
        label: 'Popular programing languages',
        data: [18.4, 15.4, 13.7, 13.2, 10.8, 5.7,4.4, 2.2, 2.1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const conf2 = {
    type: 'line',
    data: {
        labels: ['January','Fabruary','March','April','May' ],
        datasets: [{
          label: 'Bitcoin price 2021 index in U.S. dollars',
          data: [32662, 46642, 58734, 53974, 57621],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
  };

const firstChart = new Chart(ctx1, conf1);
const secondChart = new Chart(ctx2, conf2)