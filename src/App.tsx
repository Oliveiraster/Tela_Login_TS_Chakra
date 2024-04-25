import {
  ChakraProvider
} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';
import {  AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import { MainRoutes } from './routes';
import { createStorage, getAllStorage } from './service/Storage';

function App() {

  !getAllStorage() && createStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
