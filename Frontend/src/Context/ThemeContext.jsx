import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme)

        if (savedTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark')
        }

    }, [theme]);

    const toggleTheme = (newTheme) => {
        const root = document.documentElement;
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);

        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};