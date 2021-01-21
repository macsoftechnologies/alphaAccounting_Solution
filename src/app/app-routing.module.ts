import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobboardComponent } from './jobboard/jobboard.component';
import { SectorsComponent } from './sectors/sectors.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path:'services',
    component: ServicesComponent,
  },
  {
    path:'sectors',
    component: SectorsComponent,
  }, 
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'jobboard',
    component: JobboardComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
