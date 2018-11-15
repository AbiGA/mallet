import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ComingupComponent } from '../pages/comingup/comingup.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ProductsinsideComponent } from '../pages/productsinside/productsinside.component';
import { ProductsinsidebratusComponent } from '../pages/productsinsidebratus/productsinsidebratus.component';
import { ProductsinsidestumpComponent } from '../pages/productsinsidestump/productsinsidestump.component';
import { ProductsinsidewingComponent } from '../pages/productsinsidewing/productsinsidewing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlucerna', component:ProductsinsideComponent },
  { path: 'productbratus', component:ProductsinsidebratusComponent },
  { path: 'productstump', component:ProductsinsidestumpComponent },
  { path: 'productwing', component:ProductsinsidewingComponent },
  { path: 'comingup', component: ComingupComponent },
  { path: "**", redirectTo: "error-404" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
