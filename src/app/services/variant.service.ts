import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Variant } from '../models/variant.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VariantService {

  
  private apiUrl = 'http://localhost:8086/variants';
  
    constructor(private http: HttpClient) {}
  
    getVariants(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
     createVariant(variant: Variant): Observable<any> {
        return this.http.post<any>(this.apiUrl, variant);
      }
}
