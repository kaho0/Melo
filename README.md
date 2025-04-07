# Tech Learning Assistant

A modern, responsive AI chat interface powered by Google's Gemini API for technical learning assistance. Built with Next.js and Tailwind CSS.

![Tech Learning Assistant](public/preview.png)

## 🚀 Features

- **Interactive AI Chat**
  - Real-time responses from Gemini AI
  - Code syntax highlighting
  - Markdown-style formatting
  - Copy code functionality

- **Smart UI**
  - Responsive design for all devices
  - Collapsible sidebar
  - Chat history management
  - Dark theme interface

- **Learning Tools**
  - Simple/Complex explanation toggle
  - Category-based suggestions
  - Quick access to common questions
  - Code-focused responses

- **Categories Covered**
  - Web Development
  - AI & Machine Learning
  - Data Science
  - General Science
  - Programming

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **AI**: Google Gemini API
- **Icons**: React Icons
- **Styling**: Tailwind Typography

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-learning-assistant.git
cd tech-learning-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Gemini API key to .env.local
```

4. Run the development server:
```bash
npm run dev
```

## 💡 Usage

1. Select a category or start a new chat
2. Type your technical question
3. Toggle 'Simple Mode' for easier explanations
4. Use suggestion buttons for quick queries
5. Copy code snippets with one click
6. Access chat history from the sidebar

## 🔑 Key Components

- `ChatInterface`: Main chat component with message handling
- `LoadingDots`: Loading animation component
- `geminiApi`: API integration utility

## 📱 Responsive Design

- Desktop: Full sidebar with chat history
- Tablet: Collapsible sidebar
- Mobile: Optimized layout with hidden sidebar

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for developers and learners
