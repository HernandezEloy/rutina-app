// Manejo de foto de perfil
const uploadPhoto = document.getElementById('upload-photo');
const profilePic = document.getElementById('profile-pic');

uploadPhoto.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Manejo del formulario
const profileForm = document.getElementById('profile-form');

document.addEventListener('DOMContentLoaded', () => {
    const storedData = JSON.parse(localStorage.getItem('profile')) || {};
    for (let key in storedData) {
        const field = document.getElementById(key);
        if (field) field.value = storedData[key];
    }
});

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(profileForm);
    const profileData = {};
    formData.forEach((value, key) => {
        profileData[key] = value;
    });
    localStorage.setItem('profile', JSON.stringify(profileData));
    alert('Cambios guardados con éxito.');
});
