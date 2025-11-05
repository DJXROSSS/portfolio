(function() {
    const toggle = document.getElementById('theme-toggle');

    function getInitialTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'theme-dark' || saved === 'theme-light') return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light';
    }

    function applyTheme(theme) {
        document.documentElement.classList.remove('theme-light', 'theme-dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    }

    function updateToggleIcon(theme) {
        if (!toggle) return;
        const icon = toggle.querySelector('i');
        if (!icon) return;
        if (theme === 'theme-dark') {
            icon.setAttribute('data-lucide', 'moon');
            icon.classList.remove('text-gray-700');
            icon.classList.add('text-yellow-300');
        } else {
            icon.setAttribute('data-lucide', 'sun');
            icon.classList.remove('text-yellow-300');
            icon.classList.add('text-gray-700');
        }
    }

    const initial = getInitialTheme();
    applyTheme(initial);

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('theme-dark');
            applyTheme(isDark ? 'theme-light' : 'theme-dark');
            lucide.createIcons();
        });
    }

    lucide.createIcons();
})();