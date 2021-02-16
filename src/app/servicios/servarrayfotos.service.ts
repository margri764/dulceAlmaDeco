import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServarrayfotosService {

  

  productos : any []=[
{
  id:0,
  nombre: "Set Matero",
  img: "assets/compu.jpg",
  precio:"250"
},
{
  id:1,
  nombre: "Masitero c/vidrio",
  img: "assets/compu.jpg",
  precio:"170"
},
{
  id:10,
  nombre: "Fondo moderno",
  img: "assets/compu.jpg",
  precio:"1700"
},
{
  id:2,
  nombre: "Cajon grande",
  img: "assets/compu.jpg",
  precio:"130"
  },
  {
    id:3,
    nombre: "Cajon frente",
    img: "assets/compu.jpg",
    precio:"200"
    },

    {
      id:4,
      nombre: "Set Matero2",
      img: "assets/compu.jpg",
      precio:"250"
    },  
    {  
    id:5,
    nombre: "Cajon frente2",
    img: "assets/compu.jpg",
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