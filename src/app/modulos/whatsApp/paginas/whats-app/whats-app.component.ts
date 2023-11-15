import { Component } from '@angular/core';
import { Contacto } from 'src/app/core/interfaces/chatWhatsApp-interface';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.scss']
})
export class WhatsAppComponent {
  chat : Contacto[] = [
    {
    imagen: "https://robohash.org/sintsitomnis.png?size=50x50&set=set1",
    nombre: "Karlen",
    mensaje: "Nulla neque libero, convallis eget.",
    fecha: "12/26/2023",
    numMensajes: 0,
    estatus: true,
  }, {
    imagen: "https://robohash.org/sintsitomnis.png?size=50x50&set=set1",
    nombre: "Junina",
    mensaje: "Suspendisse potenti. In eleifend",
    fecha: "8/29/2024",
    numMensajes: 1,
    estatus: true,
    }, 
    {
    imagen: "https://robohash.org/rerumnisiest.png?size=50x50&set=set1",
    nombre: "Melisse",
    mensaje: "Donec semper sapien a libero.",
    fecha: "2/13/2024",
    numMensajes: 0,
    estatus: false,
  }, 
  {
    imagen: "https://robohash.org/rerumetcommodi.png?size=50x50&set=set1",
    nombre: "Nikolos",
    mensaje: "Lorem ipsum dolor sit amet.",
    fecha: "10/19/2024",
    numMensajes: 4,
    estatus: false,
  }, 
  {
    imagen: "https://robohash.org/quilaborumducimus.png?size=50x50&set=set1",
    nombre: "Sibylla",
    mensaje: "Morbi quis tortor id.Maecenas leo",
    fecha: "10/7/2024",
    numMensajes: 2,
    estatus: false,
  }, {
    imagen: "https://robohash.org/esseiuresaepe.png?size=50x50&set=set1",
    nombre: "Brynne",
    mensaje: "Vestibulum ante ipsum primis",
    fecha: "1/1/2024",
    numMensajes: 3,
    estatus: false,
  }, 
  {
    imagen: "https://robohash.org/inutvoluptatem.png?size=50x50&set=set1",
    nombre: "Rene",
    mensaje: "Integer pede justo, lacinia eget",
    fecha: "2/17/2024",
    numMensajes: 0,
    estatus: null,
  }, 
  {
    imagen: "https://robohash.org/quiaquisquasi.png?size=50x50&set=set1",
    nombre: "Lenette",
    mensaje: "Nam ultrices, libero non mattis",
    fecha: "2/14/2024",
    numMensajes: 6,
    estatus: null,
  }, 
  {
    imagen: "https://robohash.org/numquameumunde.png?size=50x50&set=set1",
    nombre: "Irma",
    mensaje: "Curabitur convallis. Duis id loa",
    fecha: "5/17/2024",
    numMensajes: 5,
    estatus: false,
  }, 
  {
    imagen: "https://robohash.org/atqueeosvoluptas.png?size=50x50&set=set1",
    nombre: "Elektra",
    mensaje: "Vestibulum ante ipsum faucibus",
    fecha: "3/22/2024",
    numMensajes: 5,
    estatus: true,
  }] 

  abrirMensaje(event : any) : void{
    if (event.numMensajes == 0) {
      alert(`Escribiste a ${event.nombreContacto}: ${event.mensajeContacto}`)
    } else {
      alert(`El ultimo mensaje que ${event.nombreContacto} te escribio es: ${event.mensajeContacto}`)
    }
  }
}
