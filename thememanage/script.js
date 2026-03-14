const form  = document.querySelector('form');
const input = document.querySelector('input');
const theme = document.querySelector('#theme');
const resetButton = document.querySelector('#reset');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedtheme = theme.value;
    if (selectedtheme === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else if (selectedtheme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }   else if (selectedtheme === 'solarized') {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add('solarized');   
    }  
    
})