"use client";
import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function calculateForce(pressureOfPsi: number, edgeLenOfMm: number): number {
  const area = edgeLenOfMm*edgeLenOfMm;
  const coefficient = 0.00689475728;

  return coefficient*area*pressureOfPsi;
}

export default function Page() {
  const [pressure, setpressure] = useState(50);
  const [edgeLen, setEdgeLen] = useState(47);
  const [force, setForce] = useState(761.525941576);

  return (
    <>
      <div className="flex-row gap-10 p-12 text-3xl">
        <Typography id="discrete-slider-small-steps" gutterBottom>
        压强/psi(磅每英寸)
        </Typography>
        <Slider
          value={pressure}
          onChange={(event, newValue) => {
            setpressure(newValue as number);
            setForce(calculateForce(newValue as number, edgeLen));
          }}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={20}
          max={80}
          valueLabelDisplay="on"
        />
        <Typography id="discrete-slider-small-steps" gutterBottom>
        边长/mm(假设是正方形)
        </Typography>
        <Slider
          value={edgeLen}
          onChange={(event, newValue) => {
            setEdgeLen(newValue as number);
            setForce(calculateForce(pressure, newValue as number));
          }}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={20}
          max={80}
          valueLabelDisplay="on"
        />
        <label>受力大小(N):</label>
        <output className="text-blue-800">{force}</output>
      </div>
    </>
  );
  }