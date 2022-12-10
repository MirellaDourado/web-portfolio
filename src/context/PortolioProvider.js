import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const value = useMemo(() => ({
    darkMode,
    setDarkMode,
  }), [darkMode]);

  return (
    <PortfolioContext.Provider value={ value }>
      <div>
        { children }
      </div>
    </PortfolioContext.Provider>
  );
}
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioProvider;