import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import scanning from '../assets/scanning.jpg'

function Scan() {
  const [logs, setLogs] = useState('');
  const [report, setreport] = useState(null)
  const [reportend, setreportend] = useState(null)
  const { tuningValue, testValue, url } = useParams();
  const testend = ()=>{
    alert("test end")
  }
  useEffect(() => {
    const scanUrl = `http://localhost:3001/scan?url=${encodeURIComponent(url)}&tuning=${tuningValue}`;
    console.log(`Connecting to: ${scanUrl}`);

    const eventSource = new EventSource(scanUrl);

    eventSource.onmessage = (event) => {
      setLogs((prevLogs) => prevLogs + '<p>' + event.data + '</p>' + '\n');
    };

    eventSource.onerror = (err) => {
      console.error('EventSource failed:', err);
      eventSource.close();
      testend()
    };

    return () => {
      eventSource.close();
    };
  }, [tuningValue, url]);

  return (
    <>
      {/* // <div className="p-4 bg-gray-100 dark:bg-gray-800 min-h-screen">
    //   <h1 className="text-2xl font-bold mb-4">Scan Page</h1>
    //   <p className="text-lg mb-2">Tuning Value: <span className="font-semibold">{tuningValue}</span></p>
    //   <p className="text-lg mb-2">Test Value: <span className="font-semibold">{testValue}</span></p>
    //   <p className="text-lg">URL: <span className="font-semibold">{url}</span></p>
    //   <pre dangerouslySetInnerHTML={{__html:logs}}></pre>
    // </div> */}
      <div class="p-4 min-h-screen" style={{ fontFamily: 'fantasy' }}>
        <div className=" dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4">
          <h1 class="text-2xl font-bold mb-4">Scanning</h1>
          <div className="dark:bg-zinc-850 bg-zinc-300 p-4 rounded-lg">
            <p class="text-lg mb-2 font-bold">Tuning Value :
              <span class=" font-normal"> {tuningValue} </span></p>
            <p class="text-lg mb-2 font-bold">Test Value: <span class=" font-normal">{testValue}</span></p>
            <p class="text- font-bold">URL: <span class=" font-normal">{url}</span></p>
          </div>
          <div className="h-36 dark:bg-zinc-850 mt-4 overflow-hidden relative rounded-lg">
            <div className=" w-5 h-[118px] dark:bg-zinc-500 z-10 opacity-50 rounded-lg m-3 animate-ping absolute top-0 left-0 animationmo"></div>
            <div className="rounded-lg overflow-hidden flex justify-center items-center">
              <img src={scanning} className='m-4 h-28 w-[80vw] rounded-lg opani' alt="scanning" />
            </div>
          </div>
        </div>
        <div className=" dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 mt-4">
          <pre style={{ whiteSpace: 'break-spaces', overflowX: 'hidden', fontFamily: 'fantasy' }} dangerouslySetInnerHTML={{ __html: logs }}>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Scan;
