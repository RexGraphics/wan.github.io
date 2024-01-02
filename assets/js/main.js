const tampilan1 = document.querySelector('.tampilan1');
const tampilan2 = document.querySelector('.tampilan2');
const btnContinue = document.getElementById('continue');
const buka = document.querySelector('.container');
const kartu = document.querySelectorAll('.wrapper');
const hilangkan = document.querySelectorAll('.hilangkan');
const input = document.getElementById('input');
const preview = document.querySelector('.gambar');
const reader = new FileReader();



btnContinue.addEventListener('click' , ()=> {
    tampilan1.classList.remove('tampil');
    tampilan2.classList.add('tampil');
});


// kartu.forEach(tekan => {
//     tekan.addEventListener('click', ()=>{
//         tekan.classList.toggle('aktif');
//     });2
// });

buka.addEventListener('click', (x)=> {
    kartu.forEach(x => {
        x.classList.toggle('aktif');
    })
    setTimeout(()=>{
        hilangkan.forEach(y => {
            y.classList.toggle('toggle');
        });
        // hilangkan.classList.toggle('toggle');
    }, 150)
});

input.addEventListener('change', ()=> {
    console.log('kebaca');
    if (input.files && input.files[0]) {
    
        reader.onload = function (e) {
            preview.style.backgroundImage = `url('${e.target.result}')`;
        }
    
        reader.readAsDataURL(input.files[0]);
    }

});
