
const formaingresar = document.getElementById('ingresar');
const formaregistrar = document.getElementById('NuevoUser');
const registroexitoso = document.getElementById('btnCS');


formaingresar.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = formaingresar['email'].value;
    let password = formaingresar['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log('Existe el Usuario');
        formaingresar.reset();
        window.location = 'Index.html';

    }).catch(err => {
        alert('Correo o Contraseña Erroneas');
        console.log(err);
    });
});

function NuevoUser() {
    console.log('entro a NuevoUser');
    const email = formaregistrar['remail'].value;
    const password = formaregistrar['rpassword'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        window.location="Index.html";
        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: formaregistrar['remail'].value,
            telefono: formaregistrar['rpassword'].value,
        });
    }).catch(err => {
        console.log(err);
    });
}
function AlertaCreada(){
    alert('se creo exitosamente');
}















