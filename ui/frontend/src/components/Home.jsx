import React, { useState } from "react";
import axios from "axios";
import texture from "../assets/texture_op.jpg";
 
function Home() {
          // <img src={texture} alt="" className="absolute top-0 right-0 w-[110%] h-full opacity-[30%]" style={{ filter: 'invert(100)', mixBlendMode: 'plus-lighter' }} /> */}

  const [inputText, setInputText] = useState("");
  const [testType, setTestType] = useState("objective");
  const [noOfQues, setNoOfQues] = useState(5);
  const [qaResults, setQaResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5001/api_generate_question", {
        itext: inputText,
        test_type: testType,
        noq: `${noOfQues}`,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.questions) {
        setQaResults(response.data.questions);
        setShowResults(true);
      } else {
        alert("No questions generated. Please try again.");
      }
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Failed to generate questions. Please check the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <img src={texture} alt="" className="absolute top-0 right-0 w-[110%] h-full opacity-[30%]" style={{ filter: 'invert(100)', mixBlendMode: 'plus-lighter' }} /> 
    {showResults ?
    (<></>):(
    <>

      <div className="form flex flex-col justify-center items-center h-[calc(100vh-56px)] relative">
        <div className="w-full max-w-lg p-8 bg-zinc-800 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">Generate Questions & Answers</h3>
          <form onSubmit={handleGenerate}>
            <div className="mb-4">
              <label htmlFor="itext" className="block text-sm font-medium">Input Text</label>
              <textarea
                name="itext"
                id="itext"
                rows="6"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Input your text here..."
                required
                className="w-full p-3 mt-1 bg-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="test_type" className="block text-sm font-medium">Choose Question Type</label>
              <select
                name="test_type"
                id="test_type"
                value={testType}
                onChange={(e) => setTestType(e.target.value)}
                required
                className="w-full p-3 mt-1 bg-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
              >
                <option value="objective">Objective</option>
                <option value="subjective">Subjective</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="noq" className="block text-sm font-medium">Number of Questions</label>
              <input
                type="number"
                name="noq"
                id="noq"
                min="1"
                value={noOfQues}
                onChange={(e) => setNoOfQues(e.target.value)}
                placeholder="No. of Questions"
                required
                className="w-full p-3 mt-1 bg-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-zinc-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-zinc-600 hover:bg-zinc-700 rounded-md text-white font-medium"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
          </div>
          </div>
        
    </>
    )}

          {showResults && (
            <div className="m-8 w-[80vw]">
              <h3 className="text-xl font-semibold pt-4 mb-4">Generated Questions & Answers</h3>
              <table className="min-w-full text-left text-zinc-400">
                <thead className="bg-zinc-700">
                  <tr>
                    <th className="py-3 px-6">No.</th>
                    <th className="py-3 px-6">Question</th>
                    <th className="py-3 px-6">Answer</th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-800 divide-y divide-zinc-700">
                  {qaResults.map((qa, index) => (
                    <tr key={index}>
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3 px-6">{qa.question}</td>
                      <td className="py-3 px-6">{qa.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => setShowResults(false)}
                className="mt-4 py-2 px-4 bg-zinc-600 opacity-70 hover:bg-zinc-700 rounded-md text-white"
              >
               Generate New
              </button>
              <div className="flex flex-col"></div>
              <button
                onClick={() => window.print()}
                className="mt-4 py-2 px-4 bg-zinc-600 opacity-70 hover:bg-zinc-700 rounded-md text-white"
              >
               Pdf
              </button>
            </div>
          )}
    
    </>
  );
}

export default Home;
