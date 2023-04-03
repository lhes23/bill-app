import React from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { IAreaChartProps } from "@/interfaces"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: true
}

const AreaChart = ({ datasets, label, color, fillColor }: IAreaChartProps) => {
  const data = {
    labels: datasets.map((m) => m.month),
    datasets: [
      {
        fill: true,
        label,
        data: datasets.map((m) => m.bill),
        borderColor: color,
        backgroundColor: fillColor
      }
    ]
  }
  return (
    <div className="px-2 my-4 bg-white rounded-lg shadow-lg">
      <Line options={options} data={data} height="50%" width="100%" />
    </div>
  )
}

export default AreaChart
