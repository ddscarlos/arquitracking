import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, firstValueFrom } from 'rxjs';
import { HttpClientUtils } from '../utils/http-client.utils';

@Injectable({
  providedIn: 'root',
})
export class arquitrackingService {
  constructor(private httpClientUtils: HttpClientUtils) {}

   
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