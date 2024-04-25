import { Component } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent {
  constructor(spiner: NgxSpinnerService, private productService: ProductService,private alertify:AlertifyService) {
    super(spiner)
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.squareJellyBox);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.price = parseFloat(price.value);
    create_product.stock = parseInt(stock.value);

    this.productService.create(create_product,()=>{this.hideSpinner(SpinnerType.squareJellyBox);
    this.alertify.message("Ürün başarıyla eklenmiştir",{dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopRight
    })
    });
  }
}
