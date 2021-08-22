import Navbar from './layout/Navbar';
import Newest from './components/Newest';
import './App.css';
import { Flex, VStack } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <VStack>
        <Flex w="100%">
          <Navbar />
        </Flex>
        <Newest />
      </VStack>
    </div>
  );
}

export default App;
