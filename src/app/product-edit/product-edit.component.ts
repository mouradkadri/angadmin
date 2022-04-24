import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form=new FormGroup({
    id_produit:new FormControl(''),
    lib_produit:new FormControl(''),
    prix_produit:new FormControl(''),
    id_cat:new FormControl(''),
    mail_admin:new FormControl(''),
    description:new FormControl(''),
    img_produit:new FormControl('')
  });

  constructor(private dataservice:DataService,private route:ActivatedRoute,private routf:Router) { }
  id_produit:any;
  data:any;
  prod=new Product();
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id_produit']);
    this.id_produit=this.route.snapshot.params['id_produit'];
    this.getdata();
  }
getdata(){
 
  this.form.controls['id_produit'].setValue(this.id_produit)
  
 this.dataservice.getemploybyid(this.id_produit).subscribe(res=>{
  this.data=res;

    this.prod=this.data;
    this.form.controls['lib_produit'].setValue(this.data.lib_produit);
    this.form.controls['prix_produit'].setValue(this.data.prix_produit);
    this.form.controls['id_cat'].setValue( this.data.id_cat);
    this.form.controls['mail_admin'].setValue(this.data.mail_admin);
    this.form.controls['description'].setValue(this.data.description);
    console.log(this.prod);
     })

    
   
  
  console.log(this.prod);
}
updatedata(){
  this.dataservice.updatedata(this.prod).subscribe(res=>{this.routf.navigate([`/`])});

}

}