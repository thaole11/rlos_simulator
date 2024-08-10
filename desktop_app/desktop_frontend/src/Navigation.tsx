import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <nav>
      <button onClick={() => handleNavigation('/')}>Banking System</button>
      <button onClick={() => handleNavigation('/customer-form')}>Customer Form</button>
    </nav>
  );
};

export default Navigation;