export interface Product {
  ID?: string;
  ProductID: number;
  ProductCode: string;
  ProductName: string;
  TotalStock: number;
  IsFavourite: boolean;
  Active: boolean;
  ProductImage?: string;
  HSNCode?: string;
  CreatedUser?: string;
}
