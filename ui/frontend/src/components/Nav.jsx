import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Authcontext'
function Nav() {
  const [dark, setdark] = useState(true)
  const { user } = useContext(AuthContext)
  function toggleDarkMode() {
    document.body.classList.toggle("dark", !dark)
    setdark(!dark)
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full h-[72px] flex items-center justify-between  border-b border-zinc-200 bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
        <div className="px-3 py-3 lg:px-5 w-full lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-zinc-500 rounded-lg sm:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"><span class="sr-only">Open sidebar</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg></button>

              <Link to="/" className="flex ms-2 md:me-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">My Qa Generator</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">

                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-zinc-100 rounded shadow dark:bg-zinc-700 dark:divide-zinc-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-zinc-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-zinc-900 truncate dark:text-zinc-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem">Settings</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem">Earnings</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <div className="user flex flex-col items-end justify-end">
                    {user ? (<><div className="flex">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 flex-shrink-0 w-7 h-7 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <div className="flex flex-col">
                        <p className="font-semibold">{user.name}</p>

                      </div>
                    </div>
                    </>
                    ) : (
                      <>

                      </>)}
                    <div className="mode mx-2">

                      <label class="inline-flex items-center mx-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 opacity-70 mx-2 mt-1 70">
                          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                        </svg>
                        <input type="checkbox" value="" onChange={toggleDarkMode} checked={dark} class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:tranzinc-x-full rtl:peer-checked:after:-tranzinc-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="sidebar-multi-level-sidebar" class="border-r border-zinc-200 dark:border-zinc-700 fixed top-0 mt-[72px] left-0 z-40 w-64 h-screen transition-transform -tranzinc-x-full sm:tranzinc-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-zinc-200 dark:bg-zinc-800">
          <ul class="space-y-2 font-medium">
            <li>
              <Link to="/" class="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            {!user ?
              (
                <>

                  <li>
                    <Link to="/login" class="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
                      <svg class="flex-shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <span class="flex-1 ms-3 whitespace-nowrap">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" class="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
                      <svg class="flex-shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                      </svg>
                      <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}

            {user ? (
              <>
                <li>
                  <Link to="/profile" class="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" flex-shrink-0 w-7 h-7 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/logout" class="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class=" flex-shrink-0 w-7 h-7 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>

                    <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                  </Link>
                </li>
              </>
            ) : (<></>)}
          </ul>
        </div>
      </aside>


      {/* <div className="p-4 sm:ml-64">
   
   </div> */}

    </>
  )
}

export default Nav