import { 
  Injectable,
  Renderer2 
} from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class MessageService {
  
  propiedad:any;

  constructor(private _http: HttpClient) { }
  
  sendMessage(body) {
    return this._http.post("http://localhost:3000/formulario", body);
    }


  

  }
