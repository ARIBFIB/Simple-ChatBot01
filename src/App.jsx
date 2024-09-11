import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")

  async function generateAnswer(){
    setanswer("Loading...");
    
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC-xdFxTTE3tYhuHT3mD32pnUzrzUomHfw",
      method: "post",
      data: {
        "contents":[
          {
            "parts":[
              {
                text : question
              }
            ]
          }
        ]
      }
    })
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }


  return (
    <>
      <h1>Chat Bot AI</h1>
      <div class="form-group">
        <label for=""></label>
        <input 
        onChange={(e) => setquestion(e.target.value)}
        placeholder='eg: How to play cricket' class="form-control" name="" id="" rows="3" />
      </div>
      <button onClick={generateAnswer}>Generate</button>
      <div class="form-group">
        <label for=""></label>
        <pre>{answer}</pre>
      </div>
      
    </>
  )
}

export default App
