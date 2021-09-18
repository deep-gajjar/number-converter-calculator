import React, { useState } from 'react'
import InputFilled from './InputFilled'

function MainSystemConverter(props) {
  const [numbers, setNumbers] = useState(Array(19).fill(''))
  const maxi = ["1110100011010100101001010000111111111111111111111111", "201220010201202221120020222202200", "32203110221100333333333333", "13243332330444444444444", "104155244231222522543", "2341521143245323060", "164324512077777777", "21803652846228680", "4095999999999999", "A87125932555953", "3234882A8596453", "106A681B1511570", "5236765A210567", "2188155E504969", "E8D4A50FFFFFF", "708CD67C97DE3", "39D373118B3H9", "1G3176H1CE9C0", "JJJJJJJJJJJJ"];

  const name = [
    'Binary',
    'Ternary',
    'Quaternary',
    'Quinary',
    'Senary',
    'Septenary',
    'Octal',
    'Nonary',
    'Decimal',
    'Undecimal',
    'Duodecimal',
    'Tridecimal',
    'Tetradecimal',
    'Pentadecimal',
    'Hexadecimal',
    'Heptadecimal',
    'Octodecimal',
    'Enneadecimal',
    'Vigesimal'
  ]
  const converterFromTo = (number, fromB) => {
    let number_in_10_base = parseInt(number.replace('.', ''), fromB) / Math.pow(fromB, (number.split('.')[1] || '').length)
    return Array(19).fill(0).map((val, id) => {
      return Number(number_in_10_base).toString(id + 2).toUpperCase()
    })
  }



  return (
    <div>
      <div className="container">
        {/* <div>
          {JSON.stringify(numbers)}
        </div> */}
        <div className="text-center my-5 ">
          <h1>Number Converter</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3 w-50">
            <span className="input-group-text  w-25 inline-block" id="basic-addon1">Base</span>
            <span className="input-group-text  w-25 inline-block" id="basic-addon1">Number Name</span>
            <span className="input-group-text  w-50 inline-block" id="basic-addon1">Converted Number</span>
          </div>
        </div>
        <div className="row row-cols-2">

          {Array(19).fill(0).map((n, id) => {
            if (id + 2 === 2 || id + 2 === 10 || id + 2 === 8 || id + 2 === 16)
              return <InputFilled
                converterFromTo={converterFromTo}
                setNumbers={setNumbers}
                numbers={numbers}
                base={id + 2}
                name={name[id]}
                key={id}
                id={id}
                value={numbers[id]}
                maxLength={maxi[id].length}
              />
            else return;
          })}

        </div>
      </div>
    </div>
  )
}

export default MainSystemConverter
