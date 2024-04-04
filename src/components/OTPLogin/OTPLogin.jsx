import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { EnterNumber } from './EnterNumber'
import { OTPVerification } from './OTPVerification'

export function OTPLogin(){

    return <>
    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EnterNumber></EnterNumber>}></Route>
                <Route path='/OTPVerification' element={<OTPVerification></OTPVerification>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}