import { notification } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { api_login } from '../utils/api'

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (): Promise<void> => {
    if (email.length > 0 && password.length > 0) {
      const res = await api_login({ email, password })
      if (res.data.code === 1000) {
        console.log('1000')
        notification.info({
          message: 'info',
          description: 'You are successfully logged in!'
        })
        // rootDispatcher.userLogIn(res.data.user)
        // history.push("")
      } else {
        notification.error({
          message: 'Error',
          description: 'Incorrect user name or password!'
        })
      }
    }
  }

  return (
    <div className='container '>
      <div className='login-container ml-5 corner'>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Email Address:</label>
                  <br />
                  <input
                    placeholder='Email Address'
                    type='text'
                    id='login'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='login'
                    size={40}
                    maxLength={60}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                  <br />
                  <input
                    placeholder='Password'
                    type='password'
                    id='password'
                    value={password}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit().catch(console.error)
                      }
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    size={40}
                    maxLength={40}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='button'
                    onClick={handleSubmit}
                    id='submit'
                    value='Login'
                    aria-disabled='false'
                  />
                  <span style={{ marginRight: '20px' }}>
                    {' '}
                    <Link href='/user/register'>Register</Link>&nbsp;&nbsp;
                    <Link href='/user/pwreset'>Forgot Password?</Link>
                  </span>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Login
