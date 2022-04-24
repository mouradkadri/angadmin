import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Product } from 'src/app/product';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})

export class ProductdashboardComponent implements OnInit {
  products:any;
  files:any;
  prod=new Product();
  
  constructor(private dataservice:DataService,private formBuilder:FormBuilder ) {
    
   }

  ngOnInit(): void {
    this.getproductsdata();
  }
  getproductsdata(){
    this.dataservice.getData().subscribe(res=>{this.products=res;})
  }
 
insertdata(){
  this.dataservice.insertdata(this.prod).subscribe(res=>{
    this.getproductsdata();
  });
  
  
}
deleteproduct(id_produit: any){
  this.dataservice.deletedata(id_produit).subscribe(res=>{
    this.getproductsdata();
});

}
imageShow: any= ''; 
onFileChanged(event: any) 
{ this.prod.img_produit = event.target.files[0] 
  var reader = new FileReader(); 
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (event) => { this.imageShow = (<FileReader>event.target).result; }
}
}
