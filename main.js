import {showModal, h1demodal} from './modal.js';
document.addEventListener('DOMContentLoaded', () => { 
    Event.preventDefault();
    showModal();
} );
document.getElementById('close-modal').addEventListener('click', () => {
    h1demodal();
});
