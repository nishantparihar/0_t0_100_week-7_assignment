import { useNavigate } from "react-router-dom"
import './OTPVerification.css'


function OTPInput() {
    const inputs = document.querySelectorAll('#inputDiv > *[id]');
   
    for (let i = 0; i < inputs.length; i++) {
        
      inputs[i].addEventListener('keydown', function(event) {
        
        if (event.key === "Backspace") {
          inputs[i].value = '';
          if (i !== 0)
            inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode >= 96 && event.keyCode <= 105) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          }
          else{
            return false;
          }
        }
      });
    }
  }




export function OTPVerification(){
  
    const navigate = useNavigate();
    return <div id="mainOTP" >

        <div id="outerOTP">
                <div id="innerOTP" >
                    <span id="upperOTP" >Login via OTP</span>

                    <div id="inputDiv">
                             <input type="text" className="inputDigit" id="first" maxLength={1} onKeyDown={OTPInput}/>
                             <input type="text" className="inputDigit" id="second" maxLength={1}/>
                             <input type="text"  className="inputDigit" id="third" maxLength={1}/>
                             <input type="text"  className="inputDigit" id="fourth" maxLength={1}/>
                    </div>
                    
                    <button id="sendButtonOTP" onClick={()=>{navigate("/OTPVerification")}}>Login</button>
                </div>
        </div>


        {/* <div onClick={()=>{navigate("/")}}>OTPVerification</div> */}
    </div>
}