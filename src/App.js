import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';


import AllRoutes from './routes';
import history from './history';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router history={history}>
          <AllRoutes />
        </Router>
      </AuthProvider>     
    </ChakraProvider>
    
  );
}

export default App;
