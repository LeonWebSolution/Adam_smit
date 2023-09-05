const openVopUp = document.getElementById('open_vop_up');
const closeVopUp = document.getElementById('vop_up_close');
const vopUp = document.getElementById('vop_up');

openVopUp.addEventListener('click', function(e){
    e.preventDefault();
    vopUp.classList.add('active');
})

closeVopUp.addEventListener('click', () =>{
    vopUp.classList.remove('active');
})