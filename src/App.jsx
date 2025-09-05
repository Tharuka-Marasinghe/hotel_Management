import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <div className='dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
