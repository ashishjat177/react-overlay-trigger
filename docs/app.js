import React from 'react'
import {render} from 'react-dom'
import Tooltip from 'reactip'
import './app.css'

const Button = ({children, ...rest}) => (
  <button {...rest}>{children}</button>
)

const App = () => {
  return (
    <div className="App">
      <div className="App-titile">
        REACTIP
        <small style={{fontSize: 22, marginLeft: 30}}>Easy Tooltip Component for React</small>
        <div className="App-github">
          <iframe src={`https://ghbtns.com/github-btn.html?user=huozhi&repo=reactip&type=star`} frameBorder="0" scrolling="0" width="60px" height="20px" />
        </div>
      </div>
      <p className="App-subtitle">Examples</p>

      <div className="Demo">
        <Tooltip placement="left" event="hover" tooltip="something">
          <button className="Toggler">hover [left]</button>
        </Tooltip>

        <Tooltip placement="right" event="hover" tooltip="something">
          <Button className="Toggler">hover [right]</Button>
        </Tooltip>

        <Tooltip placement="top" event="click" tooltip="something">
          <button className="Toggler">click [top]</button>
        </Tooltip>

        <Tooltip placement="bottom" event="click" tooltip="something">
          <button className="Toggler">click [bottom]</button>
        </Tooltip>
      </div>

      <pre>
        <code className="App-code language-javascript">
        {`
          <Tooltip placement="left" event="hover" tooltip="something">
            <button className="Toggler">hover [left]</button>
          </Tooltip>

          <Tooltip placement="right" event="hover" tooltip="something">
            <Button className="Toggler">hover [right]</Button>
          </Tooltip>

          <Tooltip placement="top" event="click" tooltip="something">
            <button className="Toggler">click [top]</button>
          </Tooltip>

          <Tooltip placement="bottom" event="click" tooltip="something">
            <button className="Toggler">click [bottom]</button>
          </Tooltip>
        `}
        </code>
      </pre>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
)
