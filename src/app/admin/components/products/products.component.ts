import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballRunningDots);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // },
    //   {
    //     name: "Kalem",
    //     stock: 50,
    //     price: 20
    //   }).subscribe();


    // this.httpClientService.put({
    //   controller:"products"
    // }, {
    //   id:"ceb2e075-3595-4bb0-9ffa-13d8fc79a2a2",
    //   name:"Kurşun Kalem",
    //   stock:99,
    //   price:60,
    // }).subscribe()

  //   this.httpClientService.delete({
  //     controller:"products"
  //   },
  //    "ceb2e075-3595-4bb0-9ffa-13d8fc79a2a2"
  // ).subscribe();

  // this.httpClientService.get({
  //   fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
  // }).subscribe(data=>console.log(data));

  }
}
