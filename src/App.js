import { Box, ChakraProvider } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ChakraProvider>
      <LoginPage></LoginPage>
    </ChakraProvider>
    
  );
}

export default App;
