function changeTheme(event) {
    const root = document.documentElement
    const theme = event.currentTarget

    if (theme.dataset.theme== 'ligth') {
        root.style.setProperty('--bg-body-color', 'var(--bg-body-dark-color)')
        root.style.setProperty('--bg-sections-color', 'var(--bg-sections-dark-color)')
        root.style.setProperty('--txt-color', 'var(--txt-dark-color)')
        theme.dataset.theme = 'dark'
    }
    else {
        root.style.setProperty('--bg-body-color', 'var(--bg-body-ligth-color)')
        root.style.setProperty('--bg-sections-color', 'var(--bg-sections-ligth-color)')
        root.style.setProperty('--txt-color', 'var(--txt-ligth-color)')
        theme.dataset.theme= 'ligth'
    }
}


