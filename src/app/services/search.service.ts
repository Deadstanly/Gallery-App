import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IPhotosData} from "../models/IPhotosData";
import {IPhoto} from "../models/iphoto";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public getPhotos(pageNumber: number, tag: string): Observable<IPhotosData> {
      return this.http.get<IPhotosData>(`${environment.flickrUrl}`,{params: {
          tags: tag,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          page: pageNumber,
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: `${environment.flickrKey}`
        }
      })
  }

  public addToFavorites(photo): Observable<void> {
    return this.http.post<void>('https://gallery-37bdf-default-rtdb.firebaseio.com/cards.json', photo)
  }

  public getFavoritesPhoto(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('https://gallery-37bdf-default-rtdb.firebaseio.com/cards.json')
  }

  public deleteFavoritesPhoto(id: string): Observable<void> {
    return this.http.delete<void>(`https://gallery-37bdf-default-rtdb.firebaseio.com/cards/${id}.json`)
  }
}

