//BODY------------------------------------------------------
mainBody = document.querySelector('body')
mainBody.style.backgroundImage = "url('assets/imgs/background1.png')";
mainBody.style.height = 100 + "vh";
mainBody.style.backgroundRepeat = "no-repeat";

//TARGET--------------------------------------------------------------------------------------------------------------------
target = document.querySelector('#target')
target.style.height = 400 + "px";
target.style.width = 400 + "px";
target.style.backgroundColor = "black";
target.style.borderRadius = 20 + "px";
target.style.display = "flex";
target.style.flexDirection = "column";
target.style.justifyContent = "center";
target.style.alignItems = "center";
target.style.marginRight = 50+"px";

imgTarget = document.querySelector('#imgTarget')
imgTarget.style.height = 200 + "px";
imgTarget.style.width = 100 + "px";
imgTarget.style.backgroundImage = "url('assets/imgs/1')";
imgTarget.style.backgroundRepeat = "no-repeat";
imgTarget.style.backgroundSize = "cover";

textPrecio = document.querySelector('#textPrecio')
precio = 450.000
textPrecio.innerHTML = "Precio: " + precio + "€";
textPrecio.style.fontSize = 20 + "px";
textPrecio.style.color = "white";
textPrecio.style.fontWeight = "bold";

cantidad = document.querySelector('#cantidad')

imgTarget.style.backgroundImage = "url('assets/imgs/1.png')";
calipso = document.querySelector('#success-outlined')
calipso.onclick = function () {
    imgTarget.style.backgroundImage = "url('assets/imgs/1.png')";
}

negro = document.querySelector('#dark-outlined')
negro.onclick = function (){
    imgTarget.style.backgroundImage = "url('assets/imgs/2.png')";
}

blanco = document.querySelector('#light-outlined')
blanco.onclick = function (){
    imgTarget.style.backgroundImage = "url('assets/imgs/4.png')";
}

function calcularTotal() {
    // Buscamos el input
    cantidad = document.querySelector("#cantidad");

    // Calculamos el total
    totalDesc = precio * cantidad.value;

    totalTargetDescription.innerHTML = "Total:" + totalDesc;

    circuloColor = document.querySelector('input[name="options-outlined"]:checked').value;
    circulo = document.querySelector('.circulo');
    circulo.style.border = "none";
    switch (circuloColor) {
        case "0":
            circulo.style.backgroundColor =  "#5cb85c";
            break;
        case "1":
            circulo.style.backgroundColor = " #0000";
            circulo.style.border = "1px solid white";
            break;
        case "2":
            circulo.style.backgroundColor = "white";
            break;
    }
}

buttonTotal = document.querySelector('#buttonTotal')

buttonTotal.onclick = function () {
    calcularTotal();
    
}

//TARGET DESCRIPTION--------------------------------------------------------------------------------------------------------
targetDescription = document.querySelector('#targetDescription')
targetDescription.style.fontSize = 20 + "px";
targetDescription.style.color = "white";
targetDescription.style.fontFamily = "Arial";
targetDescription.style.textAlign = "center";
targetDescription.style.display = "flex";
targetDescription.style.flexDirection = "column";
targetDescription.style.justifyContent = "center";
targetDescription.style.alignItems = "center";
targetDescription.style.backgroundColor = "black";
targetDescription.style.borderRadius = 20 + "px";
targetDescription.style.width = 150 + "px";
targetDescription.style.height = 150 + "px";


totalTargetDescription = document.querySelector('#totalTargetDesc')
totalTargetDescription.innerHTML = "Total:" + " " + 0

cantidadTargetDesc = document.querySelector('#cantidadTargetDesc')
cantidadTargetDesc.innerHTML = "Cantidad:" + " " + 0

divColorTargetDesc = document.querySelector('#divColorTargetDesc')
divColorTargetDesc.style.display = "flex";
divColorTargetDesc.style.flexDirection = "row";

sectionMain = document.querySelector('section')
sectionMain.style.display = "flex";
sectionMain.style.flexDirection = "row";
sectionMain.style.justifyContent = "center";
sectionMain.style.alignItems = "center";
sectionMain.style.height = 100 + "vh";


