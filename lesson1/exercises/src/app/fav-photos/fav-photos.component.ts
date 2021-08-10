import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Specific Images';
  image1 = 'https://i2.wp.com/smittenkitchen.com/wp-content/uploads/2021/07/frozen-strawberry-daiquiris-scaled.jpg?w=2560&ssl=1';
  image2 = 'https://i1.wp.com/live.staticflickr.com/65535/51365382081_716f0a64e3_z.jpg?resize=640%2C427&ssl=1';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}