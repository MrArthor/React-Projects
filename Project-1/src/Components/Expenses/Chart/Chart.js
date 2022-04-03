/** @format */

import "./Chart.css";

import ChartBar from "./ChartBar";


const Chart = (props) => {
    const DataPointValues = props.DataPoints.map(DataPoint => DataPoint.value);
    const TotalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className='Chart'>
      {props.DataPoints.map((DataPoint) => (
        <ChartBar key={DataPoint.Label} DataPoints={DataPoint.Value} MaxValue={TotalMaximum} />
      ))}
      <h2>Hie</h2>
    </div>
  );
};

export default Chart;
