//SELECTING DOM ELEMENTS
const inputs = document.querySelectorAll('button');

//ADDING EVENT LISTENERS

inputs.forEach(input => {
    input.addEventListener('click', triggerResult);
})

//DEFININING FUNCTION 

function triggerResult(e) {
    
    let button = e.target;
    let exercici = button.classList[0];
    let myName = ["J", "E", "M", "I", "M", "A", "H"];

    //TASK 1

    if (exercici === 'exercici1') {
        console.log(myName);
    } 

    //TASK 2

    else if (exercici === 'exercici2') {

        function myFunction(array) {

            array.forEach( lletra => {
                if (/[AEIOUaeiou]/.test(lletra) === true) {
                console.log(`He trobat la vocal: ${lletra}`);
              } 
                else if (/^[0-9]+$/.test(lletra) === true) {
                console.log(`Els noms de persones no contenen el número: ${lletra}`);    
              } 
                else {
                console.log(`He trobat la consonant: ${lletra}`);   
                } 
            }) 
          }
        myFunction(myName);
    }

    //TASK 3
    
    else if (exercici === 'exercici3') {
        const myMap = new Map();

        myName.forEach( letter => {
            if (myMap.has(letter)) {
                let letterCount = myMap.get(letter);
                myMap.set(letter, letterCount + 1);
            } else {
                myMap.set(letter, 1);
            }
        })
        console.log(myMap);
    }

    //TASK 4

    else if (exercici === 'exercici4') {

        const surName = ["P", "I", "C", "O"];
        const fullName = myName.concat(" ").concat(surName);
        console.log(fullName);
    }

    //TASK 5

    else if (exercici === 'exercici5') {

        function collectEmails(str) {

            let emails = [];
            const array = str.split(" ");

            //> RegEx excludes emails starting or ending with a symbol.
            const regEx = /^[a-zA-Z0-9][^\s@.]{0,60}@([^\s@.,]+\.)+[^\s@.,]{1,}[a-zA-Z0-9]$/gi 
        
            array.forEach( word => {
                if (regEx.test(word)) {
                    emails.push(word);
                } 
            })
            return emails;
        } 
        console.log(collectEmails('Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'));
    }
}