import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IDataSet{
    data: number[];
    borderColor: string;
    backgroundColor: string;
}
interface IProps {
  datasets: IDataSet[]
  xAxisLabels: string[];
  title:string;
}
export function LineChart(props: IProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return <Line options={options}
    data={{
      datasets: props.datasets,
      labels: props.xAxisLabels
    }} />;
}
