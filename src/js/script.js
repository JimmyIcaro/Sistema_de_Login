const imaiu = document.getElementById('email')
const senia = document.getElementById('senha')
const butaum = document.getElementById('dentro')

butaum.addEventListener('click', () => {
    if(imaiu.value == 'admin@admin.com' && senia.value == 1234){
        alert('login successful')
    } else {
        alert('login failed')
    }
})