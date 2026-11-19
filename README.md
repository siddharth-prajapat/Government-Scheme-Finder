# Government Scheme Finder
 
A simple web app that helps users find Indian government schemes they may be eligible for. The user enters their age, yearly income, category and state, and the app shows matching schemes as cards.
 
No scheme data is stored in the project. Results are generated live by the Google Gemini API each time the form is submitted.
 
## Features
 
- Simple form: age, yearly income, category (General / OBC / STSC) and state
- Live scheme suggestions powered by the Gemini API
- Loading spinner while the response is being fetched
- Results shown as scrollable cards with the scheme name, benefit, eligibility and an apply link
- Handles AI replies that include extra text or markdown around the JSON
## Tech Stack
 
- HTML
- CSS
- JavaScript (vanilla, no frameworks)
- Google Gemini API (`gemini-2.5-flash`)
## Project Structure
 
```
.
├── index.html     # Page structure and form
├── style.css      # Styling, loader and result cards
├── script.js      # Form handling, API call, JSON parsing, rendering
└── README.md
```
 
## How It Works
 
1. The user fills in the form and clicks **Submit**.
2. `script.js` builds a prompt from the user's details.
3. The prompt is sent to the Gemini `generateContent` endpoint with `fetch`.
4. The reply text is cleaned (markdown fences and extra text removed) and parsed as JSON.
5. Each scheme is rendered as a card in the result box.
## Getting Started
 
### Prerequisites
 
- A modern browser (Chrome, Edge, Firefox)
- A free Gemini API key from [Google AI Studio](https://aistudio.google.com)
- Optional: VS Code with the Live Server extension
### Setup
 
1. Clone the repository:
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
 
2. Create a file named `config.js` in the project folder:
```javascript
const API_KEY = "YOUR_GEMINI_API_KEY";
```
 
3. Make sure `index.html` loads it **before** `script.js`:
```html
<script src="config.js"></script>
<script src="script.js"></script>
```
 
4. In `script.js`, use `API_KEY` instead of a hardcoded key.
5. Open `index.html` with Live Server (recommended) or directly in the browser.
## API Key Safety
 
This project calls the Gemini API directly from the browser, so the key is visible to anyone who can open the page's developer tools.
 
- Never commit your API key to GitHub. Bots scan public repositories for keys.
- `config.js` is listed in `.gitignore` so it is not uploaded.
- Use a separate key for this project and set a spending limit in your Google Cloud dashboard.
- Use this setup for local learning and demos only. For a public deployment, move the API call to a small backend or serverless function so the key stays hidden.
## Limitations
 
- AI output can be inaccurate or outdated. Always verify scheme details and eligibility on the official government website before applying.
- The free Gemini tier has rate limits. Too many requests in a short time return a quota error.
- Responses can take several seconds.
## Future Improvements
 
- Store user inputs and results in an SQL database (requires a backend such as Node.js + SQLite)
- Enable Google Search grounding for more current results
- State dropdown instead of a free-text field
- Form validation and friendlier error messages
- Hindi / English language toggle
- Filter results by scheme type (education, health, farming, etc.)
## Disclaimer
 
This project is for educational purposes. It is not an official government service, and the results do not guarantee eligibility for any scheme.
 
## License
 
MIT License. Feel free to use and modify.
 
