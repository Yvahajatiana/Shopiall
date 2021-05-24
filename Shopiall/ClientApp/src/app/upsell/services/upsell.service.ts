import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upsell } from '../upsell.model';

@Injectable({
  providedIn: 'root',
})
export class UpsellService {
  constructor(private readonly httpService: HttpClient) {}

  getUpsellList(): Observable<Upsell[]> {
    return this.httpService.get<Upsell[]>(this.getFullUrl('/'));
  }

  getUpsellById(id: string): Observable<Upsell[]> {
    return this.httpService.get<Upsell[]>(this.getFullUrl(`/getbyid/${id}`));
  }

  createUpsell(upsell: Upsell): Observable<Upsell> {
    return this.httpService.post<Upsell>(this.getFullUrl(`/`), upsell);
  }

  updateUpsell(id: string, upsell: Upsell): Observable<Upsell> {
    return this.httpService.put<Upsell>(this.getFullUrl(`/${id}`), upsell);
  }

  deleteUpsell(id: string): Observable<any> {
    return this.httpService.delete(this.getFullUrl(`/${id}`));
  }

  private getFullUrl(uri: string): string {
    return `api/upsell${uri}`;
  }
}
