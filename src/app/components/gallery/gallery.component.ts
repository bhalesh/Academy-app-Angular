import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
gallery_imgs={};
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    this.gallery_imgs = this.configService.getConfig().gallery;
  }
}
