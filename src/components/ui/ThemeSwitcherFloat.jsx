import React, { useState } from 'react';
import { Sun, Moon, Monitor, Menu } from 'lucide-react';
import { useTheme } from '../../ThemeContext';
import clsx from 'clsx';

const ThemeSwitcherFloat = () => {
  const { theme, setThemePreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const buttonClass = (target) =>
    clsx(
      'p-2 rounded-md border transition-all duration-200',
      theme === target
        ? 'bg-blue-100 border-blue-400 dark:bg-blue-900 dark:border-blue-600'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600'
    );

  return (
    <div
      className={clsx(
        'fixed bottom-6 right-0 z-50',
        'transition-transform duration-300',
        isOpen ? 'translate-x-0' : 'translate-x-[60%]'
      )}
    >
      <div
        className={clsx(
          'flex items-center gap-2 p-2 rounded-l-xl shadow-xl border theme-border bg-white dark:bg-gray-900',
          'transition-opacity duration-300 cursor-pointer',
          isOpen ? 'opacity-100' : 'opacity-60'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen && (
          <>
            <button
              aria-label="Claro"
              className={buttonClass('light')}
              onClick={(e) => {
                e.stopPropagation();
                setThemePreference('light');
              }}
            >
              <Sun size={20} />
            </button>
            <button
              aria-label="Oscuro"
              className={buttonClass('dark')}
              onClick={(e) => {
                e.stopPropagation();
                setThemePreference('dark');
              }}
            >
              <Moon size={20} />
            </button>
            <button
              aria-label="Sistema"
              className={buttonClass('system')}
              onClick={(e) => {
                e.stopPropagation();
                setThemePreference('system');
              }}
            >
              <Monitor size={20} />
            </button>
          </>
        )}

        {!isOpen && (
          <div className="p-2 border border-gray-300 dark:border-gray-600 rounded-md">
            <Menu size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcherFloat;

