import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Popup from './Popup';
function Signup() {
    useEffect(() => {
      }, []);
    const [message, setmessage] = useState(null)
    const [modal, setmodal] = useState(false)
    const [formdata, setformdata] = useState({
        name: '', phone: '', email: '', password: '', cpassword: ''
    })
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', formdata).then((e) => {
            alert(e.data)
        }).catch((e) => {
            alert(e.data)
        })
    }
    const handlechange = (e) => {
        e.preventDefault()
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="flex justify-center items-center h-[calc(100vh-72px)]">
                <form class="dark:bg-zinc-800 w-[30rem] bg-zinc-200 p-4 rounded-lg" onSubmit={handlesubmit}>
                    <h4 className='text-center pb-4 font-extrabold text-3xl'>Signup</h4>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your Name</label>
                        <input type="text" value={formdata.name} onChange={handlechange} name='name' class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="Full name" requizinc />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your phone</label>
                        <input type="number" value={formdata.phone} onChange={handlechange} name="phone" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="Phone.no" requizinc />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your email</label>
                        <input type="email" value={formdata.email} onChange={handlechange} name="email" id="email" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="name@gmail.com" required />
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your password</label>
                        <input type="password" value={formdata.password} onChange={handlechange} name="password" id="password" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" requizinc />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Confirm password</label>
                        <input type="password" value={formdata.cpassword} onChange={handlechange} name="cpassword" id="password" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" required />
                    </div>

                    <button type="submit" class="text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">Signup</button>
                </form>
            </div>
        </>
    )
}

export default Signup