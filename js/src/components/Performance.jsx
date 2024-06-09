import { useState } from "react";
import Chart from "react-apexcharts";

const Performance = () => {
    const [donutData, setDonutData] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      });
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className="tab">
      <h2>Performance</h2>

      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartState.options}
            series={chartState.series}
            type="bar"
            width="500"
          />
        </div>
      <div className="donut">
      <Chart options={donutData.options} series={donutData.series} type="donut" width="380" />
    </div>
      </div>
    </div>
  );
};

export default Performance;
