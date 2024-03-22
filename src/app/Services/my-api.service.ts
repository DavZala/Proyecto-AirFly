import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paquete} from '../Models/Ipaquete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private baseURL: String = 'http://localhost:8080/api-airfly.com';
  constructor(private _httpClient: HttpClient) { }

  public obtenerProductos(): Observable<Paquete[]>{
    return this._httpClient.get<Paquete[]>(`${this.baseURL}/paquetes`);
  }
  public obtenerProducto(id: number | string): Observable<Paquete>{
    return this._httpClient.get<Paquete>(`${this.baseURL}/paquete/${id}`);
  }
}
