import { Component, OnInit, Input } from '@angular/core';
import { Artist } from './artist.interface'


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist: Artist={
    name: '',
    id: '1'
  }


  @Input() main_artist: Artist

  constructor() { }

  ngOnInit(): void {
  }

}
