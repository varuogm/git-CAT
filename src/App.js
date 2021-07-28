
import './App.css';
import Profile from './components/Profile.js';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Profile />
      </div>
    </ChakraProvider>
  );
}

export default App;
