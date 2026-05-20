# English Janala

A sleek, responsive, and highly interactive **Language Learning & Vocabulary Building Platform** built using pure Vanilla JavaScript and Tailwind CSS. Empower users to master English vocabulary, explore structured grammar segments, and filter educational tools seamlessly via real time API integrations.

## About the Project

English Janala is an educational web application designed to simplify vocabulary building and language learning workflows. Developed completely with Vanilla JavaScript for efficient DOM manipulation, the platform dynamically fetches structured lessons and word datasets from a remote REST API. It features interactive dashboard controls, flashcard style definitions, client side search filtering, and an integrated audio pronunciation system.

---

## 🔗 Links

* 🌐 **Live Site:** [English Janala Live](https://english-janala-lyart.vercel.app/)
* 💻 **GitHub Repo:** [View Github Repo](https://github.com/HSBHasib/PH-JS-English-Janala-PJ)

## 🛠️ Technologies Used

* **Structure:** HTML5 (Semantic Layouts)
* **Styling & Components:** Tailwind CSS & DaisyUI
* **Core Logic:** Vanilla JavaScript (ES6+ DOM Manipulation)
* **Data Fetching:** Fetch API (REST API Integration)
* **Audio Engine:** Web Speech API (SpeechSynthesisUtterance)
* **Icons:** FontAwesome Icons

## 🚀 Key Features

### 🔊 Interactive Text-to-Speech Pronunciation
* Integrated a audio microphone trigger next to each vocabulary entry that interacts with the browser's native **Web Speech API**. On click, it dynamically converts the targeted string into accurate verbal audio pronunciation.

### 🌐 Dynamic Async Lesson Loading
* Uses the modern **Fetch API** to asynchronously load custom learning levels and vocabulary pools from a remote server, switching active states on the interface seamlessly without full page refreshes.

### 🔍 Live Fetch API Search Filters
* Features a high performance input search field tied to an optimized JavaScript `.filter()` array matrix. It pulls the entire vocabulary dataset from the API and filters matching terms on the fly.

### 🎛️ Detailed Information Modals
* Clicking on any word dynamically queries its specific ID from the endpoint to overlay structural modal cards containing deeper metadata like meanings, sentences, and active synonym badges.

### 🔐 Form Validation & Accessibility
* Implements robust form validation using RegEx logic for secure profile logins, tracking entry fields with responsive warning alerts and active global keyboard `Enter` key event listeners.

---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone [https://github.com/HSBHasib/English-Janala.git](https://github.com/HSBHasib/English-Janala.git)

# Go into the project folder
cd PH-JS-English-Janala-PJ

# Run the project
# Simply open the index.html file directly in your browser or run via Live Server extension in VS Code!
```

## Developer
* Name: Hasibur Rahman
* GitHub: [HSBHasib](https://github.com/HSBHasib)
