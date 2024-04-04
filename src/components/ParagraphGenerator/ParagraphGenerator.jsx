import { useState } from 'react'
import './ParagraphGenerator.css'
import { useEffect } from 'react';

export function ParagraphGenerator(){
    const [words, setWords] = useState(0);


    function paraGeneration(){
        let generatedPara = "";

        for(let i = 0; i < words; i++){
            let wordLength = Math.ceil(Math.random()*10);
            let curWord = ""

            for(let j = 0; j < wordLength; j++){
                curWord += String.fromCharCode(Math.ceil(Math.random()*25) + 97);
            }

            generatedPara += curWord + " "
        }

        document.getElementById("newpara").innerHTML = generatedPara;
    }


    return <>
        <div id="main">

                <div id="container">
                    <div id="para">Para Generator</div>
                    <div id="holder">
                        <input type="text" placeholder="Enter Number of Words" onChange={(e)=>{setWords(e.target.value)}} />
                        <button onClick={paraGeneration}>Generate</button>
                    </div>
                </div>

                <div id='newpara'></div>


        </div>
    
    </>

}