import axios from "axios";

async function fetchWebsiteContent(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);  // This will print the HTML content of the webpage
    } catch (error) {
        console.error("Error fetching the page:", error);
    }
}

fetchWebsiteContent('https://github.com');
