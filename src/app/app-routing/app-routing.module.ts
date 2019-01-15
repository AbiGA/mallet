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
import { ProductsinsidelucernaobtuseComponent } from '../pages/productsinsidelucernaobtuse/productsinsidelucernaobtuse.component';
import { ProductsinsidelucernapickComponent } from '../pages/productsinsidelucernapick/productsinsidelucernapick.component';
import { ProductsinsidelucernarelicaComponent }  from '../pages/productsinsidelucernarelica/productsinsidelucernarelica.component';
import { ProductsinsidebratusarborComponent } from '../pages/productsinsidebratusarbor/productsinsidebratusarbor.component';
import { ProductsinsidebratustrigonoComponent } from '../pages/productsinsidebratustrigono/productsinsidebratustrigono.component';
import { RobbiechairComponent } from '../pages/robbiechair/robbiechair.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlucerna', component:ProductsinsideComponent },
  { path: 'productlucernaobtuse', component:ProductsinsidelucernaobtuseComponent },
  { path: 'productlucernapick', component:ProductsinsidelucernapickComponent },
  { path: 'productlucernarelica', component:ProductsinsidelucernarelicaComponent },
  { path: 'productbratus', component:ProductsinsidebratusComponent },
  { path: 'productbratustrigono', component:ProductsinsidebratustrigonoComponent },
  { path: 'productrobbiechair', component:RobbiechairComponent },
  { path: 'productbratusarbor', component:ProductsinsidebratusarborComponent },
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
