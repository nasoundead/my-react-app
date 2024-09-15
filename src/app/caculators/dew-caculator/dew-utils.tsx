export function calculateDewPoint(temp: number, rh: number): number {
  const a = 17.625;
  const b = 243.04;
  const alpha = Math.log(rh / 100) + (a * temp) / (b + temp);
  const dewPoint = (b * alpha) / (a - alpha);

  return dewPoint;
}
