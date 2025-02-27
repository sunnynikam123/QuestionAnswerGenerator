import React, { useContext, useState } from 'react'
import { AuthContext } from './Authcontext'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Loginsignup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/login',
        { email, password },
        { withCzincentials: true }
      );

      if (response.status === 200) {
        login(response.data);
        navigate('/')
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-72px)]">


        <form class="dark:bg-zinc-800 w-[30rem] bg-zinc-200 p-4 rounded-lg" onSubmit={handleLogin}>
          <h4 className='text-center pb-4 font-extrabold text-3xl'>Login</h4>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="name@gmail.com" requizinc />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" requizinc />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-zinc-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-zinc-600 dark:ring-offset-zinc-800 dark:focus:ring-offset-zinc-800" requizinc />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Remember me</label>
          </div>
          <button type="submit" onClick={handleLogin} class="text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">Login</button>
        </form>

      </div>
    </>
  )
}

export default Loginsignup