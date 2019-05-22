import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContentComponent } from './components/content/content.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SocialComponent } from './components/social/social.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component';

const routes:Routes=[
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HeaderComponent},
  {path:'About', component:IntroComponent},
  {path:'Gallery', component:GalleryComponent},
  {path:'Services', component:ContentComponent},
  {path:'Testimonials', component:TestimonialComponent},
  {path:'Clients', component:ClientsComponent},
  {path:'Pricing', component:PricingComponent},
  {path:'EnrollForm', component:EnrollFormComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SocialComponent,
    PageNotFoundComponent,
    EnrollFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar:true,
      tapToDismiss:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
