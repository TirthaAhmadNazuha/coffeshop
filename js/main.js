console.log(document.getElementsByName('theme-color')[0])
document.querySelector('button').addEventListener('click', () => {
    document.getElementsByName('theme-color')[0].setAttribute('content', '#e5fce4')
    console.log(document.getElementsByName('theme-color')[0])
})