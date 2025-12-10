import { Product } from "./product.model";

export interface Variant {
  ID?: string;
  Name : string;
  ProductID : string;
}

export interface ListVariant {
    ID?: string;
  Name : string;
  ProductID : string;
  Product : Product;

}