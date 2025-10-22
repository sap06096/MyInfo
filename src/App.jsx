import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // AppRoutes 컴포넌트 임포트
import { ThemeProvider } from './contexts/ThemeProvider';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes /> {/* AppRoutes 컴포넌트 사용 */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
