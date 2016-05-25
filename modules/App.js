import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNumber: {
        hasError: false
      },
      cvvNumber: {
        hasError: false
      },
      ccName: {
        hasError: false
      }
    }
  },
  handleCCNumberInputChange(e){
    if (!Validator.isCreditCard(e.target.value)) {
      this.setState({
        ccNumber: {
          hasError: true
        }
      });
    }else{
      this.setState({
        ccNumber: {
          hasError: false
        }
      })
    }
  },
  handleCVVNumberInputChange(e){
    if (!Validator.isLength(e.target.value, {min:3, max: 3})) {
      this.setState({
        cvvNumber: {
          hasError: true
        }
      });
    }else{
      this.setState({
        cvvNumber: {
          hasError: false
        }
      })
    }
  },
  handleCCNameInputChange(e){
    if (!Validator.isLength(e.target.value, {min:2, max: 500})) {
      this.setState({
        ccName: {
          hasError: true
        }
      });
    }else{
      this.setState({
        ccName: {
          hasError: false
        }
      })
    }
  },
  render() {
    console.log(this.state.cvvNumber);
    return (
      <main className="card">

        <h1 className="card__title">
          <span className="card__title--firstWord">your</span>Bank
        </h1>

        <form className="input__container">

          <input className={ this.state.ccNumber.hasError? "input__ccNumber--error" : "input__ccNumber"} type="text" pattern="[0-9]{16}" onChange={this.handleCCNumberInputChange} placeholder="xxxxxxxxxxxxxxxx"/>

          <h3 className="input__cvvNumber--label">cvv</h3>
          <input className={ this.state.cvvNumber.hasError? "input__cvvNumber--error" : "input__cvvNumber"} type="text" pattern="[0-9]{3}" onChange={this.handleCVVNumberInputChange} placeholder="xxx"/>

          <h3 className="input__date--label">good<br/>thru</h3>
          <input className="input__date" type="text" pattern="[0-9]{2}" placeholder="mm"/>
          <h3 className="input__date--slash">/</h3>
          <input className="input__date" type="text" pattern="[0-9]{2}" placeholder="yy"/>

          <input className={ this.state.ccNumber.hasError? "input__name--error" : "input__name"} type="text" pattern="[A-Za-z]{2,}" onChange={this.handleCCNameInputChange} placeholder="your name"/>
          <img className="logo--visa" src="../visa.png"/>

        </form>
      </main>
    )
  }
})
