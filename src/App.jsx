import './App.css'
import FileDisplay from './components/FileDisplay';
import Header from './components/Header'
import HomePage from './components/HomePage'
import { useState, useRef, useEffect} from 'react';
import Information from './components/Information';
import {MessageTypes} from './utils/presets'
import Transcribing from './components/Transcribing';

function App() {

  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [output, setOutput] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const isAudioAvailable = file || audioStream
  function handleAudioReset() {
    setFile(null)
    setAudioStream(null)
  }

  const worker = useRef(null);

  useEffect(() => {
    if(!worker.current) {
      worker.current = new Worker(new URL('./utils/whisper.worker.js', 
        import.meta.url), {
          type:'module'
        })
    }

    const onMessageReceived = async(e) => {
      switch (e.data.type) {
        case 'DOWNLADING':
          setDownloading(true)
          console.log("Downloading");
          break;
          case 'LOADING':
          setLoading(true)
          console.log("LOADING");
          break;
          case 'RESULT':
          setOutput(e.data.results)
          console.log(e.data.results);
          break;
          case 'INFERENCE_DONE':
          setFinished(true)
          console.log("Done");
          break;
      }
    }
    worker.current.addEventListener('message',
      onMessageReceived)
    return () =>  worker.current.removeEventListener('message', onMessageReceived)
  } )

  // useEffect(() => {
  //   console.log(audioStream);
    
  // },[audioStream])

  async function readAudioFrom(file) {
    console.log("File details", file);
    
    const sampling_rate= 16000
    const audioContext = new AudioContext({sampleRate: sampling_rate})
    const response = await file.arrayBuffer()
    const decoded = await audioContext.decodeAudioData(response)
    const audio = decoded.getChannelData(0)
    return audio
  }
 
   async function handleFormSubmission() {
    if (!file && !audioStream) { 
      console.log("cannot read");
      return
     }

    let audio = await readAudioFrom(file ? file : audioStream)
    const model_name = `openai/whisper-tiny.en`

    worker.current.postMessage({
      type: MessageTypes.INFERENCE_REQUEST,
      audio,
      model_name
    })
  }
  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {output ? (
          <Information output={output} finished={finished}/>
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
          <FileDisplay handleFormSubmission={handleFormSubmission} handleAudioReset={handleAudioReset} file={file} audioStream={audioStream} />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <footer></footer>
    </div>
  )
}

export default App
