//Tarea 5: Crear un mapa dinámico con Google Maps indicando la posición del usuario
// TAW y WAVE dan problemas de accesibilidad debido a la naturaleza de los mapas dinámicos de google
// En algunos navegadores hay que hacer varios intentos hasta que el objeto geolocation devuelve valores
// AIzaSyC8aUp4J8B-MOmk6mg4A8cSsbE3qzEpB1g (miKey)

// Encapsulamiento de la función initMap como método de la case MapaDinamico
class MapaDinamico{

    initMap(){
        navigator.geolocation.getCurrentPosition(this.success.bind(this));
    }

    success(posicion){
        this.longitud = posicion.coords.longitude.toFixed(6); 
        this.latitud = posicion.coords.latitude.toFixed(6);
        console.log("Posicion cargada correctamente");
    }

    showMap(){
        var favorito = {lat: Number(this.latitud) , lng: Number(this.longitud)};
        debugger;
        var mapaFavorito = new google.maps.Map(document.getElementById('mapa'),{zoom: 16,center:favorito});
        var marcador = new google.maps.Marker({position:favorito,map:mapaFavorito});
    }
}

var mapaDinamicoGoogle = new MapaDinamico();
