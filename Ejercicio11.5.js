//Tarea 5: Crear un mapa dinámico con Google Maps indicando la posición del usuario

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
        var mapaFavorito = new google.maps.Map(document.getElementById('mapa'),
            {zoom: 16,center:favorito}
            );
        var marcador = new google.maps.Marker({
            position:favorito, 
            title:"Usted está aquí", //Aparece como tooltip sobre el marcador
            map:mapaFavorito});
    }
}

var mapaDinamicoGoogle = new MapaDinamico();
