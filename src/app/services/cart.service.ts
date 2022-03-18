 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartItemList : any = [];
  public ProductList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }
  
  getProducts(){
    return this.ProductList.asObservable();
  }
  addToCart(product:any){
    this.cartItemList.push(product);
    this.ProductList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.ProductList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    this.ProductList.next(this.cartItemList);
  }
}
