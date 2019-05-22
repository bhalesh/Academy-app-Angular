import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
about:{};
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.getIntro();
  }

getIntro(){
  this.about = this.configService.getConfig().about;
}

}
