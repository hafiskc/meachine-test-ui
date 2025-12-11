import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariantOption } from '../models/variant-option.model';

@Injectable({
  providedIn: 'root'
})
export class VariantOptionService {
private apiUrl = 'http://localhost:8086/variantoptions';

  constructor(private http: HttpClient) {}

  getVariantOptions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createVariantOption(variantOption: VariantOption): Observable<any> {
    return this.http.post<any>(this.apiUrl, variantOption);
  }
}
