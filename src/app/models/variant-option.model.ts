import { Variant } from './variant.model';

export interface VariantOption {
  ID?: string;
  Value: string;
  VariantID: string;
}

export interface ListVariantOption {
  ID?: string;
  Value: string;
  VariantID: string;
  Variant: Variant;
}
