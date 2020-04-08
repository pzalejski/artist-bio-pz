import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';


const routes: Routes = [
  {path: 'artist-bio', component: ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
