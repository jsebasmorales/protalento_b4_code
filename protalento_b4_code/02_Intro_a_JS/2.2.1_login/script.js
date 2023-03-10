// 1. Definir una constante con el elemento

const listInputs = [
    {
        type: 'text',
        label: 'Nombre',
        value: '',
        placeholder: 'Ingresa un nombre', 
        id: 'name',
        extraClass: '',
        required: true
    },
    {
        type: 'email',
        label: 'Email',
        value: '',
        placeholder: 'Ingresa tu correo', 
        id: 'email',
        extraClass: ''
        required: true
    },
    {
        type: 'password',
        label: 'Contraseña',
        value: '',
        placeholder: 'Ingresa tu contraseña', 
        id: 'password',
        extraClass: ''
        required: true
    }
];

// 2. Definir una función

function createInputs () {

}

const createInputs = (inputs) => {
    const sectionInputsHTML = document.getElementById (section--inputs);
    
} 

// 3. Usar la función
createInputs (listInputs);