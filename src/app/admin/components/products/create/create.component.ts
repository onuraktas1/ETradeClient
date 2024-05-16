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


    if(!name.value){
      this.alertify.message("Lütfen ürün adını giriniz!",{dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
      return;
    }

    if(parseInt(stock.value)<0){
      this.alertify.message("Stok bilgisi 0 dan büyük olmalıdır!",{dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
      return;
    }



    this.productService.create(create_product,()=>{this.hideSpinner(SpinnerType.squareJellyBox);
    this.alertify.message("Ürün başarıyla eklenmiştir",{dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopRight
    })
    },errorMessage=>{
       this.alertify.message(errorMessage,
       {
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
       })
    });
  }
}
