import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to Login Flow!</h1>
            <p>This application demonstrates what a React-based register/login workflow might look like with <a href='https://github.com/yelouafi/redux-saga'>redux-saga</a>.</p>

            <p>It's based on Max Stoiber's <a href='https://github.com/mxstbr/login-flow'>login-flow</a>. See the full source code on <a href='https://github.com/sotojuan/saga-login-flow'>GitHub</a>!</p>
          </section>

          <section className='text-section'>
            <h2>Features</h2>
            <ul>
              <li>
                <p>Features will go here :-)</p>
              </li>
            </ul>
          </section>

          <section className='text-section'>
            <h2>Authentication</h2>
            <p>Authentication happens in <code>app/auth/index.js</code>, using <code>fakeRequest.js</code> and <code>fakeServer.js</code>. <code>fakeRequest</code> is a fake <code>XMLHttpRequest</code> wrapper. <code>fakeServer</code> responds to the fake HTTP requests and pretends to be a real server, storing the current users in local storage with the passwords encrypted using <code>bcrypt</code>.</p>
          </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
