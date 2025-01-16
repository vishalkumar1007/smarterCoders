import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [validUrl, setValidUrl] = useState(false);
  const [isUrlRequiredFieldsError, setIsUrlRequiredFieldsError] =
    useState(false);
  const [isQueryRequiredFieldsError, setIsQueryRequiredFieldsError] =
    useState(false);
  const [results, setResults] = useState([
    {
      title: "Digital Robotics for your Company 2.0",
      description:
        "Deploy automations powered by AI, Big Data, Web Crawling and Natural Language.",
      path: "/home",
      match: "95%",
      html: `<div class="et_pb_text_inner">
                <h1>Digital Robotics for your Company 2.0</h1>
                <p>Deploy automations powered by AI, Big Data, Web Crawling and Natural Language.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
    {
      title: "AI-powered automation tools for enterprise.",
      description: "Streamline your workflow with intelligent solutions.",
      path: "/products",
      match: "78%",
      html: `<div class="et_pb_text_inner">
                <h3>Enterprise Solutions</h3>
                <p>AI-powered automation tools for enterprise. Streamline your workflow with intelligent solutions.</p>
             </div>`,
    },
  ]);
  const [responseData, setResponseData] = useState();

  const [previewStates, setPreviewStates] = useState(
    new Array(results.length).fill(false)
  );

  useEffect(() => {
    console.log("response Data : ", responseData);
  }, [responseData]);

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  useEffect(() => {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (urlRegex.test(url)) {
      setValidUrl(true);
    } else {
      setValidUrl(false);
    }
  }, [url]);

  useEffect(() => {
    setIsUrlRequiredFieldsError(false);
  }, [url]);
  useEffect(() => {
    setIsQueryRequiredFieldsError(false);
  }, [query]);

  const handleOnSubmit = () => {
    if (url.length === 0) {
      setIsUrlRequiredFieldsError(true);
      return console.log("wrong url input");
    } else if (query.length === 0 || /\d/.test(query)) {
      setIsQueryRequiredFieldsError(true);
      return console.log("wrong query input");
    } else if (!validUrl) {
      setIsUrlRequiredFieldsError(true);
      return console.log("Please enter a valid URL");
    } else {
      fetchData();
    }
  };

  const fetchData = () => {
    setIsLoadingData(true);
    const dataApi = "http://127.0.0.1:8000/search";
    const data = {
      url: url,
      query: query,
    };
    fetch(dataApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response.ok);
        if (!response.ok) {
          setIsLoadingData(false);
          return console.log("Error while fetching data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setResponseData(data.results);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoadingData(false);
      });
  };

  return (
    <div className="app_main">
      <div className="app_main_arrange_width">
        <div className="app_main_top">
          <h1>Website Content Search</h1>
          <p className="subtitle">
            Search through website content with precision
          </p>
          <div className="form">
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              style={{ borderColor: isUrlRequiredFieldsError ? "red" : null }}
            />
            <input
              type="text"
              placeholder="Enter search query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              style={{ borderColor: isQueryRequiredFieldsError ? "red" : null }}
            />
            <button
              type="submit"
              className="search_btn"
              style={{ padding: isLoadingData ? "3px 10px" : null }}
              onClick={() => handleOnSubmit()}
            >
              {isLoadingData ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-loader"
                >
                  <path d="M12 2v4" />
                  <path d="m16.2 7.8 2.9-2.9" />
                  <path d="M18 12h4" />
                  <path d="m16.2 16.2 2.9 2.9" />
                  <path d="M12 18v4" />
                  <path d="m4.9 19.1 2.9-2.9" />
                  <path d="M2 12h4" />
                  <path d="m4.9 4.9 2.9 2.9" />
                </svg>
              ) : (
                <p>Search</p>
              )}
            </button>
          </div>
        </div>
        <div className="app_main_bottom">
          <div className="results">
            {responseData && responseData.length > 0 && (
              <>
                <h2 id="search_result_title">Search Results</h2>
                {responseData.map((result, index) => (
                  <div key={index} className="result-card">
                    <h3>{result.chunk.split(" ").slice(0, 7).join(" ")}</h3>
                    <p className="title_disc">
                      {result.chunk.split(" ").slice(0, 50).join(" ")}.
                    </p>
                    {/* <p className="path">Path: {result.path}</p> */}
                    <div className="view_html_code_div">
                      <button
                        className="view-html"
                        onClick={() => togglePreview(index)}
                      >
                        {previewStates[index] ? "Hide HTML" : "View HTML"}
                      </button>
                    </div>

                    <div className="match">
                      {Math.round(result.relevance_score * 100)}% match
                    </div>

                    {previewStates[index] && (
                      <pre className="html-preview">
                        {`<div class="et_pb_text_inner">
    <h1>${result.chunk.split(" ").slice(0, 7).join(" ")}</h1>
    <p>${result.chunk.split(" ").slice(0, 50).join(" ")}.</p>
</div>`}
                      </pre>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
