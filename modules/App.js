import React from 'react'
import Validator from 'validator'

export default React.createClass({
  render() {
    return (
      <main className="card">

        <h1 className="card__title">
          <span className="card__title--firstWord">your</span>Bank
        </h1>

        <div className="input__container">

          <input className="input__ccNumber" type="number" pattern="[0-9]{16}" placeholder="xxxxxxxxxxxxxxxx"/>

          <h3 className="input__cvvNumber--label">cvv</h3>
          <input className="input__cvvNumber" type="number" pattern="[0-9]{3}" placeholder="xxx"/>

          <h3 className="input__date--label">good<br/>thru</h3>
          <input className="input__date" type="number" pattern="[0-9]{2}" placeholder="mm"/>
          <h3 className="input__date--slash">/</h3>
          <input className="input__date" type="number" pattern="[0-9]{2}" placeholder="yy"/>

          <input className="input__name" type="text" pattern="[A-Za-z]{2,}" placeholder="your name"/>
          <img className="logo--visa" src="../visa.png"/>

        </div>
      </main>
    )
  }
})
