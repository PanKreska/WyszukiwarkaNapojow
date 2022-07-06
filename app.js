const input = document.querySelector('.search');
const list = document.querySelectorAll('li');


const search = element => {
    const text = element.target.value.toLowerCase();
    list.forEach(el => {
        if(el.textContent.toLowerCase().indexOf(text) !== -1){
            el.style.display = 'block';
            
        } else {
            el.style.display = 'none';
        }
    })
};

input.addEventListener('keyup', search); 