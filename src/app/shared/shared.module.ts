import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Counter
import { CountUpModule } from 'ngx-countup';

// bootstrap component
import { ModalModule } from 'ngx-bootstrap/modal';

//Component
import { FeaturesComponent } from './features/features.component';
import { ProcessComponent } from './process/process.component';
import { ClientsComponent } from './clients/clients.component';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    ProcessComponent,
    ClientsComponent,
   
    BlogComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    ModalModule,
    SlickCarouselModule,
    CountUpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[
    FeaturesComponent,
    ProcessComponent,
    ClientsComponent,
   
    BlogComponent,
    ContactComponent
  ]

})
export class SharedModule { }
