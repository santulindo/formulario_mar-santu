import {showModal, h1demodal} from './modal.js';
document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('formulario');
    const submitButton = document.getElementById('submit');
    const closeModalButton = document.getElementById('close-modal');

    form.addEventListener('submit', (event) => {
        e.preventDefault();
        showModal();
    });

    closebtn.addEventListener('click', h1deModal);
});