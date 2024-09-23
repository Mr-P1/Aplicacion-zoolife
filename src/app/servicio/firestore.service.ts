import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Animal {
  id: string;
  nombre_comun: string,
  nombre_cientifico: string,
  especie: string,
  estado: string,
  posicion_mapa: number,
  descripcion: string,
  curiosidad: string,
  precaucion: string,
  imagen: string,
}


const PATH = 'Animales';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }


  private _firestore = inject(Firestore);
  private _rutaAnimal = collection(this._firestore, PATH)


  getAnimales(): Observable<Animal[]> {
    return collectionData(this._rutaAnimal,{idField: 'id'}) as Observable<Animal[]>;
  }
}
