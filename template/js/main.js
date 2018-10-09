function changeTheme(themename) {
    localStorage.setItem('preftheme', themename);
    document.getElementsByTagName("body")[0].className = themename;
}

function onPageLoad() {
    preftheme = localStorage.getItem('preftheme');
    changeTheme(preftheme);
}

window.onload = onPageLoad;
