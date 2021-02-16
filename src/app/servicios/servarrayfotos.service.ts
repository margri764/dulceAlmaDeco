import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServarrayfotosService {

  

  productos : any []=[
{
  id:0,
  nombre: "Set Matero",
  img: "assets/stencil2.jpg",
  precio:"250"
},
{
  id:1,
  nombre: "Masitero c/vidrio",
  img: "assets/camara1.jpg",
  precio:"170"
},
{
  id:10,
  nombre: "Fondo moderno",
  img: "assets/fondo.jpg",
  precio:"1700"
},
{
  id:2,
  nombre: "Cajon grande",
  img: "assets/camara2.jpg",
  precio:"130"
  },
  {
    id:3,
    nombre: "Cajon frente",
    img: "assets/camara3.jpg",
    precio:"200"
    },

    {
      id:4,
      nombre: "Set Matero2",
      img: "assets/stencil2.jpg",
      precio:"250"
    },  
    {  
    id:5,
    nombre: "Cajon frente2",
    img: "assets/camara3.jpg",
    precio:"200"
    },
    {
      id:6,
      nombre: "Set Matero3",
      img: "assets/stencil2.jpg",
      precio:"250"
    },  
    {
      id:7,
      nombre: "Masitero c/vidrio2",
      img: "assets/camara1.jpg",
      precio:"170"
    },
    {
      id:8,
      nombre: "Set Matero",
      img: "assets/stencil2.jpg",
      precio:"250"
    },
    {
      id:9,
      nombre: "Masitero c/vidrio",
      img: "assets/camara1.jpg",
      precio:"170"
    },
    {
      id:10,
      nombre: "Cajon grande",
      img: "assets/camara2.jpg",
      precio:"130"
      },
      {
        id:11,
        nombre: "Cajon frente",
        img: "assets/camara3.jpg",
        precio:"200"
        },
    
];


 


  constructor() { 
    
  }
 
getProductos(){

  return this.productos;
}
getIndex(i){

  return this.productos[i];
  
 }

itemsProductos(){

return this.productos.length;

 }



}