import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpclient:HttpClient ) { }

  getData(){
    return this.httpclient.get('http://localhost/apm/api/read.php')
  }
  insertdata(data: any){
    return this.httpclient.get(`http://localhost/apm/api/create.php?id_produit=${data.id_produit}&lib_produit=${data.lib_produit}
    &prix_produit=${data.prix_produit} &img_produit=${data.img_produit} &id_cat=${data.id_cat} &description=${data.description}&mail_admin=${data.mail_admin}`)
  }
  deletedata(data: any){
    return this.httpclient.get(`http://localhost/apm/api/delete.php?id_produit=${data}`)
  }
  getemploybyid(data: any){
    return this.httpclient.get(`http://localhost/apm/api/single_read.php?id_produit=${data}`)
  }
  updatedata(data: any){
    return this.httpclient.get(`http://localhost/apm/api/update.php?id_produit=${data.id_produit}&lib_produit=${data.lib_produit}
    &prix_produit=${data.prix_produit} &img_produit=${data.img_produit} &id_cat=${data.id_cat} &description=${data.description} &mail_admin=${data.mail_admin}`)
  }
}
