import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../services/search.service";
import {IPhoto} from "../models/iphoto";
import {map} from "rxjs";
import {FirebaseData} from "../models/firebase-data";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoritesData: FirebaseData[] = [];


  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getFavoritesPhoto();
  }

  getFavoritesPhoto() {
    this.searchService.getFavoritesPhoto().pipe(
      map(data => {
        return Object.keys(data)
          .map(key => ({
            ...data[key],
            id: key
          }))
      })
    ).subscribe(modData =>  this.favoritesData = modData)
  }

  deleteFavoritesPhoto(id: string) {
    this.searchService.deleteFavoritesPhoto(id).subscribe({
      next: (data) => {
        this.getFavoritesPhoto()
      },
      error: () => {alert("Error")},
      complete: () => {{}}
    })
  }


  exit() {
    localStorage.clear();
    this.router.navigateByUrl('auth').then();
  }


}
