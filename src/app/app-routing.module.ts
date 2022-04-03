import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {SearchComponent} from "./main-page/search/search.component";
import {FavoritesComponent} from "./favorites/favorites.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: "full" },
  { path: 'auth', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'main-page', component: MainPageComponent},
  { path: 'app-search', component: SearchComponent},
  { path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
