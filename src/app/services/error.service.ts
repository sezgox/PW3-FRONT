import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorShowsUp(e: HttpErrorResponse){
    if(e.error.msg){
      alert(e.error.msg)
    }else{
      alert('Error al conectar con el servidor..')
    }
  }

}
