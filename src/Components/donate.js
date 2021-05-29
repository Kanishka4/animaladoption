import React from "react";
import "./donate.css";

function donate() {
  return (
    <div className="sm">
      <div className="donate">
        <form>
          <fieldset>
            <br></br>
            <table>
              <tr>
                <td colSpan="2">
                  <label>Amount: &nbsp;</label>
                </td>
                
                  <td>
                    
                    <input  type="radio" name="amount"/>&nbsp;<span>&#8377;</span>100&nbsp;&nbsp;&nbsp;&nbsp;
                    
                  
                  
                  <input  type="radio" name="amount"/>&nbsp;<span>&#8377;</span> 500&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  
                  
                  <input  type="radio" name="amount"/>&nbsp;<span>&#8377;</span>1000&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  </td>
                  </tr>
              <tr>
                <td colSpan="2">
                  <label>Name: &nbsp;</label>
                </td>
                <td colSpan="3">
                  <input
                    className="name"
                    type="text"
                    inputMode="text"
                    pattern="/^[A-Za-z]+([\ A-Za-z]+)*/"
                    required
                    autoFocus
                  ></input>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label>Credit/Debit Card Number: &nbsp;</label>
                </td>
                <td>
                  <input
                    className="ccn"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autoComplete="cc-number"
                    maxLength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <label>CVV: &nbsp;</label>
                </td>
                <td>
                  <input
                    className="cvv"
                    type="tel"
                    inputMode="numeric"
                    maxLength="3"
                    pattern="\d{3}"
                    placeholder="xxx"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label>Expiry Date:&nbsp;</label>
                </td>
                <td>
                  <input
                    className="expDate"
                    type="text"
                    inputMode="numeric"
                    required
                    pattern="\d{2}-\d{2}"
                    placeholder="mm/yy"
                  ></input>
                </td>
              </tr>
            </table>
            <br></br>
            <center>
              <button className="btn btn-success">Donate!</button>
            </center>
            <br></br>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default donate;
