//onclick="enviar_form()" value="Enviar"
function validar(){
    var nomb , apellido, email, comentarios;
    nomb = document.getElementById("nomb").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    comentarios = document.getElementById("comentarios").value;

    if(nomb === ""){
        alert(" El campo nombre esta vacío");
        return false;
    }
    else if(apellido === ""){
        alert("El campo apellido esta vacío");
        return false;
    }
    else if(email === ""){
        alert("El email es obligatorio");
        return false;
    }
    console.log("Nombre: " + nomb );
    console.log("Apellido: " + apellido);
    console.log("Email: " + email);
    console.log("Comentarios: " + comentarios);

    return false;
}
