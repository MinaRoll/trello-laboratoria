function agregarLista(id){ //contructor para listas
  this.id = id;
  this.agregar = function(){
    var nameList = document.getElementById("ingresoLista").value;
    var contenedor = document.getElementById("my-section");
    var contenedor2 = document.getElementById("todasLasTareas");

    var lista = document.createElement("div");
    lista.setAttribute("class","listas");
    lista.setAttribute("id","div" + this.id);
    var nombreLista = document.createTextNode(nameList);

    var saltoLinea = document.createElement("br"); 
  
    var inputTarea = document.createElement("textarea");//input para cada tarea
    inputTarea.setAttribute("id","input" + this.id);

    var botonTarea = document.createElement("button");//boton para cada tarea
    botonTarea.setAttribute("id","boton" + this.id);
    var contenidoBoton = document.createTextNode("Añadir Tarea");
    botonTarea.appendChild(contenidoBoton);

    //Anido a la lista
    lista.appendChild(document.createElement("br"));
    lista.appendChild(nombreLista);
    lista.appendChild(saltoLinea);
    lista.appendChild(inputTarea);
    lista.appendChild(document.createElement("br"));
    lista.appendChild(botonTarea);
    contenedor2.appendChild(lista);
    contenedor.appendChild(contenedor2);
  };
}

//al presionar "ingrese una lista" direcciona al boton
function primera(){
  var touch = document.getElementById("my-section");
  var inputLista = document.createElement("input");
  inputLista.setAttribute("type","text");
  inputLista.setAttribute("id","ingresoLista");
  var elBoton = document.createElement("button");
  elBoton.setAttribute("id","botoncito");
  var contElBoton = document.createTextNode("Añadir Lista");
  elBoton.appendChild(contElBoton);

  touch.appendChild(inputLista);
  touch.appendChild(elBoton);
  touch.appendChild(document.createElement("br"));

  var i=0;
  var boton = document.getElementById("botoncito");
  boton.addEventListener("click",function(){
    var agregoLista = new agregarLista(i.toString());
    i++;
    agregoLista.agregar();

    //constructor para tareas
    function TareaNueva(id_tarea,id_lista){
      this.id_tarea = id_tarea;
      this.id_lista = id_lista;
      this.agregar = function(){
        var nameWork = document.getElementById("input" + agregoLista.id).value;
        var contenedorTarea = document.getElementById("div" + agregoLista.id);

        var imprimirTarea = document.createElement("div");
        imprimirTarea.setAttribute("class","tareas");
        var miUl = document.createElement("ul");
        var miLi = document.createElement("li");
        var textoTarea = document.createTextNode(nameWork);

        miLi.appendChild(textoTarea);
        miUl.appendChild(miLi);
        imprimirTarea.appendChild(miUl);

        contenedorTarea.appendChild(imprimirTarea);
      }
    }

    function segunda(){
      var agregoTarea = new TareaNueva(j.toString(),agregoLista.id);
      j++;
      agregoTarea.agregar();
    }

    var j=0;
    var botonTarea = document.getElementById("boton" + agregoLista.id);
    botonTarea.addEventListener("click",segunda);
  });

}

document.getElementById("newList").addEventListener("click",primera);