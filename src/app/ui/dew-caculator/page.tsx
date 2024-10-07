"use client";
import { useState } from "react";
import DewLine from "./dew-line";
import { calculateDewPoint } from "./dew-utils";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function Page() {
  const [temp, setTemp] = useState(25);
  const [rh, setRh] = useState(60);
  const [dew, setDew] = useState(16.7);

  return (
    <>
      <div className="flex-row gap-10 p-12 text-3xl">
      <Typography id="discrete-slider-small-steps" gutterBottom>
        环境温度(degC)
      </Typography>
      <Slider
        value={temp}
        onChange={(event, newValue) => {
          setTemp(newValue as number);
          setDew(calculateDewPoint(temp, rh));
        }}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={-40}
        max={80}
        valueLabelDisplay="on"
      />
        {/* <label htmlFor="temp">温度(degC):</label>
        <input
          type="number"
          id="temp"
          name="temp"
          value={temp}
          onChange={(e) => {
            setTemp(parseFloat(e.target.value));
            setDew(calculateDewPoint(temp, rh));
          }}
          min="-40"
          max="80"
          step="0.01"
        />
        <hr /> */}
      <Typography id="discrete-slider-small-steps" gutterBottom>
        相对湿度(%RH)
      </Typography>
      <Slider
        value={rh}
        onChange={(event, newValue) => {
          setRh(newValue as number);
          setDew(calculateDewPoint(temp, rh));
        }}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="on"
      />
        {/* <label htmlFor="rh">相对湿度(%)</label>
        <input
          type="number"
          id="rh"
          name="rh"
          value={rh}
          onChange={(e) => {
            setRh(parseFloat(e.target.value));
            setDew(calculateDewPoint(temp, rh));
          }}
          min="0"
          max="100"
          step="1"
        />
        <hr /> */}
        <label>露点(degC):</label>
        <output className="text-blue-800">{dew}</output>
      </div>
      <DewLine relativeHumidity={rh}/>
    </>
  );
}
