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
  img: "assets/2.jpg",
  precio:"170"
},
{
  id:10,
  nombre: "Fondo moderno",
  img: "assets/3.jpg",
  precio:"1700"
},
{
  id:2,
  nombre: "Cajon grande",
  img: "assets/4.jpg",
  precio:"130"
  },
  {
    id:3,
    nombre: "Cajon frente",
    img: "assets/5.jpg",
    precio:"200"
    },

    {
      id:4,
      nombre: "Set Matero2",
      img: "assets/6.jpg",
      precio:"250"
    },  
    {
      id:4,
      nombre: "Set Matero2",
      img: "assets/7.jpg",
      precio:"250"
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