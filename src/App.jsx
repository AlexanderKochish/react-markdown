import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown, setMarkDown] = useState('')
  return (
    <div className='container'>
      <div className="inner-wrapper">
        <div className="editorWrap">
          <div htmlFor='editor' className='toolbar'>
          <i>Editor</i>
          </div>
          <textarea 
            id='editor'
            cols="100" 
            rows="20" 
            spellcheck="false"
            value={markDown} 
            onChange={(e) => setMarkDown(e.target.value)}
          > 
          </textarea>
        </div>
        <div className='preview'>
          <div className='toolbar'>
            <i>Preview</i>
          </div>
            <ReactMarkdown>
            {markDown}
            </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
