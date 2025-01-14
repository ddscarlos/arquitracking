import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, firstValueFrom } from 'rxjs';
import { HttpClientUtils } from '../utils/http-client.utils';

@Injectable({
  providedIn: 'root',
})
export class arquitrackingService {
  constructor(private httpClientUtils: HttpClientUtils) {}
  //INICIO ENDPOINTS GENERALES
  departamentossel(data: any) {
    return this.httpClientUtils
      .postQuery('/ubigeo/departamento/listar', data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  provinciasel(data: any){
    return this.httpClientUtils
    .postQuery('/ubigeo/provincia/listar',data)
    .pipe(
      map((data)=>{
        return data;
      })
    );
  }

  distritosel(data: any){
    return this.httpClientUtils
    .postQuery('/ubigeo/distrito/listar',data)
    .pipe(
      map((data)=>{
        return data;
      })
    );
  }
  //FIN ENDPOINTS GENERALES
  guardarEmpresa(data: any) {
    return this.httpClientUtils
      .postQuery('/empresa/ins', data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  Listartablaempresa(data: any) {
    return this.httpClientUtils.postQuery('/empresa/listar', data).pipe(
        map(data => {
            return data;
        })
    );
  }


}
