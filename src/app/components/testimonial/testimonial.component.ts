import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
testimonial={};
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.getTestimonial();
  }

  getTestimonial(){
    this.testimonial=this.configService.getConfig().Testimonials;
  }

}
