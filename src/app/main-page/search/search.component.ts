import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {IPhotosData} from "../../models/IPhotosData";
import {UserInfo} from "../../models/UserInfo";
import {IPhoto} from "../../models/iphoto";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  photosData: IPhotosData;
  inputValue: string;
  page: number = 1;


  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  search() {
    this.inputValue = this.searchInput.nativeElement.value;
    this.searchService.getPhotos(1, this.searchInput.nativeElement.value).subscribe(data => this.photosData = data);
  }

  addToFavorites(photo: IPhoto) {
   const userEmail = UserInfo.getInstance();
   const favoritesData = {
     email: userEmail.email,
     photo: photo
   }
   this.searchService.addToFavorites(favoritesData).subscribe();
  }

}
