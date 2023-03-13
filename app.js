// Parse URL parameter
const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');
const typeParam = urlParams.get('type');
const nameParam = urlParams.get('name');
const judulParam = urlParams.get('judul');

// Parse JSON string from URL parameter
const data = JSON.parse(dataParam);

// Create chart data for each dataset
const chartData = Object.keys(data).map((key) => {
  return {
    label: key,
    data: data[key].map((item) => item.value),
    backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`,
    borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
    borderWidth: 1
  };
});

// Create chart labels
const chartLabels = data[Object.keys(data)[0]].map((item) => item.label);

// Create chart options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: judulParam
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: nameParam
      },
      ticks: {
        autoSkip: false
      }
    },
    y: {
      title: {
        display: true,
        text: 'Value'
      }
    }
  }
};

// Create chart configuration
const chartConfig = {
  type: typeParam,
  data: {
    labels: chartLabels,
    datasets: chartData
  },
  options: chartOptions
};

// Create chart instance
const myChart = new Chart(document.getElementById('myChart'), chartConfig);
const canvas = document.getElementById('myChart');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

