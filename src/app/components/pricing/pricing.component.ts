import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
pricing:{};
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.getPricing();
  }

  getPricing(){
    this.pricing=this.configService.getConfig().pricing;
  }
}
