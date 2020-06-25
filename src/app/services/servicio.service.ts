import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private fire: AngularFirestore) { }

  guardarLocal(nombre: string, email: string, telefono: string, localidad: string){
    try{
      let data = {nombre, email, telefono, localidad};
      this.fire.collection("locales/").add(data);
   }
   catch(e){
      console.log(e);
   }
  }

  guardarProducto(nombre: string, marca: string, stock: string, tipo: string, local: string, precio: string, localidad: string){
    try{
      let data = {nombre, marca, stock, tipo, local, precio, localidad};
      this.fire.collection("productos/").add(data);
   }
   catch(e){
      console.log(e);
   }
  }

  public traerTodos( collection : string){
    return this.fire.collection(collection).snapshotChanges();
  }
}
