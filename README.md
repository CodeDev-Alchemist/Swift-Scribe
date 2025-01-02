# React + Vite
# Swift-Scribe

Swift-Scribe is a powerful transcription and translation website that listens to audio, transcribes it into text, and provides translation capabilities. Built using React, Tailwind CSS, Xenova API, and worker.js, it is designed to make audio-to-text conversion and translation seamless and efficient.

## Features

- **Audio Transcription**: Converts audio input into text using advanced transcription techniques.
- **Text Translation**: Supports multilingual translation of the transcribed text.
- **Download Option**: Allows users to download the transcribed text in a file.
- **User-Friendly UI**: Built with React and styled with Tailwind CSS for a clean and responsive interface.

## Technologies Used

- **React**: For building the front-end user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Xenova API**: For handling transcription and translation tasks.
- **worker.js**: For managing background tasks like transcription, translation, and text downloading.

## File Structure

```
src/
├── components/
│   ├── FileDisplay.jsx
│   ├── Header.jsx
│   ├── HomePage.jsx
│   ├── Information.jsx
│   ├── Transcribe.jsx
│   ├── Transcribing.jsx
│   ├── Transcription.jsx
│   ├── Translation.jsx
├── utils/
│   ├── presets.js
│   ├── translate.worker.js
│   ├── whisper.worker.js
```

### Components

- **FileDisplay.jsx**: Displays uploaded audio files.
- **Header.jsx**: Top navigation bar and branding.
- **HomePage.jsx**: Landing page of the application.
- **Information.jsx**: Provides details about the app's features and usage.
- **Transcribe.jsx**: Handles the transcription process.
- **Transcribing.jsx**: Displays progress during transcription.
- **Transcription.jsx**: Displays the transcribed text.
- **Translation.jsx**: Handles the translation of transcribed text.

### Utils

- **presets.js**: Contains configuration presets.
- **translate.worker.js**: Manages translation tasks in the background.
- **whisper.worker.js**: Handles audio transcription tasks in the background.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeDev-Alchemist/Swift-Scribe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Swift-Scribe
   ```

3. Install dependencies:
   ```bash
   npm i
   ```

4. Start the development server:
   ```bash
   npm start
   or
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. Upload an audio file or record audio directly in the app.
2. View the transcription of the audio in real-time.
3. Translate the transcribed text into your desired language.
4. Download the transcription as a text file.

## Contributing

Contributions are welcome! If you have suggestions or find issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Created by [CodeDev-Alchemist]
Inspired by jamezmca

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
