import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("");
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
    }
  ]);
  const [previewStates, setPreviewStates] = useState(
    new Array(results.length).fill(false)
  );

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Fetching results for URL: ${url} and Query: ${query}`);
  };

  return (
    <div className="app_main">
      <div className="app_main_arrange_width">
        <div className="app_main_top">
          <h1>Website Content Search</h1>
          <p className="subtitle">
            Search through website content with precision
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter search query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <button type="submit" className="search_btn">
              Search
            </button>
          </form>
        </div>
        <div className="app_main_bottom">
          <div className="results">
            <h2 id="search_result_title">Search Results</h2>
            {results.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.title}</h3>
                <p className="title_disc">{result.description}</p>
                <p className="path">Path: {result.path}</p>
                <div className="view_html_code_div">
                  <button
                    className="view-html"
                    onClick={() => togglePreview(index)}
                  >
                    {previewStates[index] ? "Hide HTML" : "View HTML"}
                  </button>
                </div>

                <div className="match">{result.match} match</div>
                {previewStates[index] && (
                  <pre className="html-preview">{result.html}</pre>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
