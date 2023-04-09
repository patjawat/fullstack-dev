import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  // products = [];
  products = new Array<any>();
  constructor(private serviceProduct:ProductService) {}
  
  ngOnInit(): void {
this.loadProductList();
  }

  loadProductList(){
    this.serviceProduct.getAll().subscribe(result => {
      this.products = result.products;
      console.log(this.products);
      
    })
  }

  

}
