import './App.css';
import { LandingPage } from './components/pages/Landing';
import { Routes, Route} from 'react-router-dom';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import Profile from './components/pages/Profile/index.jsx';
import { pageWrapper } from './components/layout/PageWrapper.jsx';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedProfile = withAuthenticationRequired(Profile, {
  onRedirecting: () => <div className='text-center p-4'>Redirecting to login...</div>,
});

export const App = () => {
  return (
    <div className='font-serif w-[100vw] h-[100vh] m-0 flex-c justify-between align-centre text-center min-h-screen secondary-c'>
      <Routes>
        <Route path='/' element={pageWrapper(<LandingPage />)} />
        <Route path='/graphs' element={pageWrapper(<GraphsPage />)} />
        <Route path='/profile' element={pageWrapper(<ProtectedProfile />)} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
