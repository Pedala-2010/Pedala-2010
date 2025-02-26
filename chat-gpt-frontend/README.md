# Chat GPT Frontend

This project is a chat application built with React and TypeScript, featuring advanced transitions and a user-friendly interface.

## Project Structure

```
chat-gpt-frontend
├── public
│   ├── index.html          # Main HTML file
│   └── styles
│       └── main.css       # CSS styles for the application
├── src
│   ├── components
│   │   ├── ChatBox.tsx    # Chat interface component
│   │   ├── Message.tsx     # Individual message component
│   │   └── TransitionWrapper.tsx # Component for animation transitions
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for the React application
│   └── types
│       └── index.ts       # TypeScript types and interfaces
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd chat-gpt-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- Use the input field in the chat interface to send messages.
- Messages will appear in the chat window with smooth transitions.
- The application is designed to be responsive and user-friendly.

## Features

- Advanced transitions for a smooth user experience.
- TypeScript for type safety and better development experience.
- Modular components for easy maintenance and scalability.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.