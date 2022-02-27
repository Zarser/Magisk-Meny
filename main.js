const list = document.querySelectorAll('.list');
function aktivlänk(){
    list.forEach((item) =>
    item.classList.remove('aktiv'));
    this.classList.add('aktiv');
}
list.forEach((item) =>
item.addEventListener('click',aktivlänk));