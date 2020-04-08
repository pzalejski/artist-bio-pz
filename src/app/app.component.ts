import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top 5 Artists';

  artists = [
    'Phil Collins',
    'Ozzy Osbourne',
    'Chester Bennington',
    'David Draiman',
    'Sonny Sandoval'

  ]
}
