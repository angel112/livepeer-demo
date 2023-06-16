import logo from './logo.svg';
import './App.css';
import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';
import DecentralizedStoragePlayback from './components/DecentralizedStoragePlayback';

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: `${process.env.NEXT_PUBLIC_STUDIO_API_KEY}`
  })
})

const theme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

function App() {
  return (
    <div className="App">
      <LivepeerConfig client={livepeerClient} theme={theme}>
        <DecentralizedStoragePlayback />
      </LivepeerConfig>
    </div>
  );
}

export default App;
