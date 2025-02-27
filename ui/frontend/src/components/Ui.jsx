import React from 'react'
import scanning from '../assets/scanning.jpg'
function Ui() {
    return (

        <>
            <div class="p-4 min-h-screen" style={{ fontFamily: 'fantasy' }}>
                <div className="flex">
                    <div className="">

                        <div className=" dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4" style={{  width: 'calc(100vw - 3rem - 255px)'}}>
                            <h1 class="text-2xl font-bold mb-4">Scanning</h1>
                            <div className="dark:bg-zinc-850 bg-zinc-300 p-4 rounded-lg">
                                <p class="text-lg mb-2 font-bold">Tuning Value :
                                    <span class=" font-normal"> 1 </span></p>
                                <p class="text-lg mb-2 font-bold">Test Value: <span class=" font-normal">interesting-file-seen-in-logs</span></p>
                                <p class="text- font-bold">URL: <span class=" font-normal">https://www.youtube.com</span></p>
                            </div>
                            <div className="h-36 dark:bg-zinc-850 mt-4 overflow-hidden relative rounded-lg">
                                {/* <div className="s w-full     absolute top-0 left-0  z-10"> */}
                                {/* <div className="w-[100%] m-4 h-28 rounded-lg opacity-45 bg-green-500"></div> */}
                                <div onChange={() => { console.log }} className=" w-5 h-[118px] dark:bg-zinc-500 opacity-50 rounded-lg m-3 animate-ping absolute z-10 top-0 left-0  animationmo"></div>
                                {/* </div> */}


                                <div className="rounded-lg overflow-hidden w-[calc(100vw - 3rem - 255px)] flex justify-center items-center">
                                    <img src={scanning} className='m-4 h-28  w-[76vw] rounded-lg opani' alt="scanning" />
                                </div>
                            </div>
                        </div>
                        <div className=" dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 mt-4">
                            <pre className='w-[calc(100vw - 3rem - 255px)]' style={{ whiteSpace: 'break-spaces', overflowX: 'hidden', fontFamily: 'fantasy' }}>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">perl: warning: Setting locale failed.</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">perl: warning: Falling back to the system default locale ("English_United States.1252").</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">- Nikto v2.5.0</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ Multiple IPs found: 142.250.70.110, 142.251.42.78, 142.250.192.78, 142.251.42.46, 142.250.70.78, 142.250.192.46, 142.251.42.14, 142.250.70.46, 142.250.192.14, 142.250.71.110, 142.250.192.110, 142.250.183.46, 142.250.192.142, 142.250.183.78, 142.250.76.206, 142.250.183.110</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ Target IP:          142.250.70.110</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /: Uncommon header 'accept-ch' found, with contents: Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version.</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /: Uncommon header 'origin-trial' found, with contents: AmhMBR6zCLzDDxpW+HfpP67BqwIknWnyMOXOQGfzYswFmJe+fgaI6XZgAzcxOrzNtP7hEDsOo1jdjFnVr2IdxQ4AAAB4eyJvcmlnaW4iOiJodHRwczovL3lvdXR1YmUuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJWaWV3WFJlcXVlc3RlZFdpdGhEZXByZWNhdGlvbiIsImV4cGlyeSI6MTc1ODA2NzE5OSwiaXNTdWJkb21haW4iOnRydWV9.</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ : Server banner changed from 'ESF' to 'sffe'.</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Uncommon header 'cross-origin-opener-policy-report-only' found, with contents: same-origin; report-to="youtube".</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/api/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /feeds/videos.xml: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/t/terms/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/live_chat/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/watch_queue_ajax/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/comment/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/results/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: Entry '/verify_age/' is returned a non-forbidden or zincirect HTTP code (200). See: https://portswigger.net/kb/issues/00600600_robots-txt-file</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /robots.txt: contains 19 entries which should be manually viewed. See: https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt</p>
                                <p className="p-3 dark:bg-zinc-850 bg-zinc-300 bg-zinc-3000 rounded-md mt-5 whitespace-break-spaces w-[calc(100vw - 3rem - 255px)]">+ /: The Content-Encoding header is set to "deflate" which may mean that the server is vulnerable to the BREACH attack. See: http://breachattack.com/</p>
                            </pre>zz
                        </div>
                    </div>
                    <div className="sidebar w-52 bg-zinc-900">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ui