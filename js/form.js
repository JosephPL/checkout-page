let inputEmail = document.querySelector('#email');
let inputPhone = document.querySelector('#phone');
let inputName = document.querySelector('#name');
let inputAddress = document.querySelector('#address');
let inputCity = document.querySelector('#city');
let sltCountry = document.querySelector('#sltCountry');
let inputZip = document.querySelector('#zip');
let inputCheckbox = document.querySelector('#checkbox');
const boton = document.querySelector('#btnSubmit');

boton.addEventListener('click', getDataForm);

function getDataForm(e){
    e.preventDefault();

    const dataForm = {
        email : inputEmail.value, 
        phone : inputPhone.value,
        name : inputName.value,
        address : inputAddress.value,
        city : inputCity.value,
        country : sltCountry.value,
        zip : inputZip.value
    }
    
    if(validationForm(dataForm)){
        Swal.fire({
            text: 'Missing information',
            icon: 'warning',
            confirmButtonText: 'Check again'
        });
    }else {
        Swal.fire({
            text: 'Good Job!',
            icon: 'success',
            confirmButtonText: 'Continue'
        });
    }
};

const validationForm = (dataForm) =>{

    let error = false;
    let count = 0;

    if(dataForm.email === ''){
        inputEmail.classList.add('empty');
        count ++
    }else {
        inputEmail.classList.remove('empty');
    }

    if(dataForm.phone === ''){
        inputPhone.classList.add('empty');
        count ++
    }else {
        inputPhone.classList.remove('empty');
    }

    if(dataForm.name === ''){
        inputName.classList.add('empty');
        count ++
    }else {
        inputName.classList.remove('empty');
    }

    if(dataForm.address === ''){
        inputAddress.classList.add('empty');
        count ++
    }else {
        inputAddress.classList.remove('empty');
    }

    if(dataForm.city === ''){
        inputCity.classList.add('empty');
        count ++
    }else {
        inputCity.classList.remove('empty');
    }

    if(dataForm.country === ''){
        sltCountry.classList.add('empty');
        count ++
    }else {
        sltCountry.classList.remove('empty');
    }

    if(dataForm.zip === ''){
        inputZip.classList.add('empty');
        count ++
    }else {
        inputZip.classList.remove('empty');
    }

    if(count > 0){
        console.log(count + error);
        error = true;
        return error;
    }else {
        error = false;
        console.log(count + error);
        return error;
    }
};

