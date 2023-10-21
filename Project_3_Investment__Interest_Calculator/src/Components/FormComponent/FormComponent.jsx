import React, {useState} from "react";

import '../../index.css'

function FormComponent(props){
const {Savings, setSavings}=useState('');
const {yearlySacings, setYearlySavings}=useState('');
const {ROI, SetROI}=useState('');
const {numberOfYears, setNumberOfYears}=useState('');

const SavingHandler = (event) => {
    setSavings(event.target.value);
}
const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
}
const ROIHandler = (event) => {

    SetROI(event.target.value);
}
const numberOfYearsHandler = (event) => {
    setNumberOfYears(event.target.value);
}

const ResetHandler = (event) => {
    setSavings('');
    setYearlySavings('');
    SetROI('');
    setNumberOfYears('');
}


const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    // const formData = new FormData(form);
    // const userInput = Object.fromEntries(formData.entries());
  //  calculateHandler(userInput);
  }
    return (<form className="form" onSubmit={onSubmitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" onChange={SavingHandler} value={Savings}/>
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler} value={yearlySacings}/>
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" id="expected-return" onChange={ROIHandler} value={ROI} />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" onChange={numberOfYearsHandler} value={numberOfYears} />
      </p>
    </div>
    <p className="actions">
      <button type="reset" className="buttonAlt" onClick={ResetHandler}>
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>

)
}

export default FormComponent;