import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeKey = 'app-theme';
    isDarkMode = signal<boolean>(true);

    constructor() {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem(this.themeKey);
        if (savedTheme) {
            this.isDarkMode.set(savedTheme === 'dark');
        } else {
            // Default to dark if no preference (matching user's current app state)
            this.isDarkMode.set(true);
        }

        // Effect to apply theme class to body
        effect(() => {
            const mode = this.isDarkMode() ? 'dark' : 'light';
            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add(`${mode}-theme`);
            localStorage.setItem(this.themeKey, mode);
        });
    }

    toggleTheme() {
        this.isDarkMode.update(prev => !prev);
    }
}
