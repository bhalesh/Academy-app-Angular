import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
partners={};
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.getPartners();
  }

  getPartners(){
    this.partners = this.configService.getConfig().d_partners;
  }

}
