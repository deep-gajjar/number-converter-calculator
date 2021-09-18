import React from 'react'

function InputFilled(props) {
  const convert = (event) => {
    let value = event.target.value.toUpperCase();
    if (value.length > props.maxLength) {
      return;
    }
    let result;
    if (value === '') {
      props.setNumbers(Array(19).fill(''))
    } else {
      let last = value.slice(-1)
      if (last === '.') {
        // console.log('.')
        if (value.split('.').length === 3) {
          return;
        }
        result = props.converterFromTo(value, props.base)
        result[props.id] = value;
        props.setNumbers(result);
        return;
      }
      if ('0' <= last && last <= '9') {
        if (0 <= Number(last) && Number(last) < props.base) {

        } else {
          return;
        }
      } else {
        if (props.base <= 10) {
          return
        }
        // console.log(last);
        let b = String.fromCharCode('A'.charCodeAt(0) + props.base - 10);
        // console.log('b',b);
        if ('A' <= last && last < b) {

        } else {
          return;
        }
      }


      result = props.converterFromTo(value, props.base)
      result[props.id] = value;
      props.setNumbers(result);
    }
  }

  return (
    // <div className="d-flex justify-content-center">
    <div className="col">

      <div className="input-group mb-3">
        <span className="input-group-text  w-25 inline-block " id="basic-addon1">Base : {props.base}</span>
        <span className="input-group-text  w-25 inline-block" id="basic-addon1">{props.name} ({props.base})</span>
        <input type="text"
          className="form-control"
          placeholder=""
          aria-label="Username" aria-describedby="basic-addon1"
          onChange={convert}
          value={props.value}
        />
      </div>
    </div>
  )
}

export default InputFilled
