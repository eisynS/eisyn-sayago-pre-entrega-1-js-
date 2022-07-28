alert( " Bienvenido a mi pagina web")

let dinerodisponible = 10000
coronacosto= 3000
stellacosto= 4000



alert(" Tiene un saldo a favor de " + dinerodisponible)

alert( " La corona tiene un costo de " + coronacosto +" y la stelella tiene un costo de " + stellacosto)

let opcionusuario = parseInt( prompt(" Ingrese una opcion.\n 1: cerveza corona. \n 2: cerveza stella. \n 3: Salir "))


switch(opcionusuario){

    case 1:
        alert ( " Selecciono corona ")
        dinerodisponible -= coronacosto
        alert ( " Su remanente es de " +dinerodisponible)
        dinerodisponible=0
        break;

    case 2:

        alert ( " Selecciono stella  ")
        dinerodisponible -= stellacosto
        alert ( " Su remanente es de " +dinerodisponible)
        dinerodisponible=0
        break;
    
    case 3 : 

    alert( " Gracias ")

    break;

    default:
        alert(" Su opcion no es valida")
        break;


}