import { Line } from "@ant-design/charts";
import { calculateDewPoint } from "./dew-utils";

export default function DewLine() {
  const rh = 60;

  const start = -20;
  const end = 50;
  const step = 1;
  const array1 = Array.from({ length: (end - start) / step + 1 }, (_, i) => ({
    index: i,
    temp: start + i * step,
    division: "环境温度",
  }));

  const array2 = Array.from({ length: (end - start) / step + 1 }, (_, i) => ({
    index: i,
    temp: calculateDewPoint(start + i * step, rh),
    division: "露点温度",
  }));

  const data = [...array1, ...array2];

  const config = {
    data,
    title: {
      visible: true,
      text: "露点曲线",
    },
    xField: (d: any) => d.index,
    yField: "temp",
    colorField: "steelblue",
    seriesField: "division",
  };
  return <Line {...config} />;
}
