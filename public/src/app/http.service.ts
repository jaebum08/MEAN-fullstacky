import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  //These routes match up with restful routing in the server / config / routing.js file.
  getPets(){
    return  this._http.get('/api/pets');
  }
  getPetBy(id){
    return this._http.get('/api/pet/'+id)
  }
  createPet(newAuthorData){
  console.log (newAuthorData);
    return this._http.post('/api/pets', newAuthorData);
  }
  deletePet(id){
    return this._http.delete('/api/pets/'+id);
  }
  updatePet(data){
    return this._http.put('/api/pets/'+data._id, data);
  }
}