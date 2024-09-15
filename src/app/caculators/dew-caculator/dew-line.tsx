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

  // const data = [
  //   { year: "1991", value: 3 },
  //   { year: "1992", value: 4 },
  //   { year: "1993", value: 3.5 },
  //   { year: "1994", value: 5 },
  //   { year: "1995", value: 4.9 },
  //   { year: "1996", value: 6 },
  //   { year: "1997", value: 7 },
  //   { year: "1998", value: 9 },
  //   { year: "1999", value: 13 },
  // ];
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
