import { useNavigate } from "react-router-dom"
import "./EnterNumber.css"


export function EnterNumber(){
    const navigate = useNavigate();
    return <div id="main">

        <div id="outer">
                <div id="inner" >
                    <span id="upper" >Login via OTP</span>
                    <input type="text" placeholder="Enter your mobile number" id="numberInput" />
                    <button id="sendButton" onClick={()=>{navigate("/OTPVerification")}}>Send OTP</button>
                </div>
        </div>


   
    </div>
}
