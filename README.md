# VirasaAI — AI-Powered Indian Heritage Discovery 🇮🇳

> **"Point. Discover. Experience India."**

A student innovation project that combines **AI image recognition** with a **rich cultural database** to create an immersive platform showcasing India's 5,000-year heritage.

## 🎯 Features

- 📷 **AI Scanner** — Point your camera at a heritage site, AI identifies it and reveals its cultural story
- 🗺️ **Interactive India Map** — Click any state to explore its dance, music, cuisine, festivals, and crafts
- ⏳ **Cultural Timeline** — Journey through 9 eras from Indus Valley to Modern India
- 🎨 **Heritage Gallery** — Filterable gallery of 20 curated heritage sites with detailed info
- 🧩 **Heritage Quiz** — 52 questions across 5 categories with scoring and heritage titles
- 📖 **Rich Database** — 20 heritage sites, 29 states, each with history, cuisine, art, stories, and fun facts

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| AI Engine | TensorFlow.js + MobileNet |
| Frontend | Vanilla HTML, CSS, JavaScript |
| Maps | SVG-based Interactive India Map |
| Data | JSON Knowledge Base (client-side) |
| Fonts | Google Fonts (Outfit + Noto Serif Devanagari) |

## 🚀 Run Locally

No build tools needed! Just serve with any HTTP server:

```bash
# Python
python3 -m http.server 3000

# Or any static file server
npx serve .
```

Then open **http://localhost:3000** in your browser.

## 📁 Project Structure

```
├── index.html                  # Main HTML with full page structure
├── src/
│   ├── app.js                  # Main application controller
│   ├── styles/
│   │   ├── variables.css       # Design tokens & color palette
│   │   └── index.css           # Complete stylesheet
│   └── data/
│       ├── heritageSites.js    # 20 heritage sites database
│       ├── indianStates.js     # 29 states cultural data
│       ├── quizQuestions.js    # 52 quiz questions
│       └── timeline.js        # 9 historical eras
```

## 🎨 Design

- **Color Palette**: Saffron, Deep Indigo, Royal Gold, Temple Red, Peacock Teal
- **Theme**: Premium dark mode with glassmorphism
- **Typography**: Outfit + Noto Serif Devanagari (for Hindi accents)
- **Animations**: Mandala rotations, typewriter, particles, confetti, hover effects

## 📜 License

Student Innovation Project — 2026

---

*विरासत बचाओ, संस्कृति अपनाओ — Save the Heritage, Embrace the Culture*
