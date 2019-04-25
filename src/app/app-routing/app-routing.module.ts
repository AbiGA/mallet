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
import { ProductlucernapieComponent } from '../pages/productlucernapie/productlucernapie.component';
import { ProductsinsidebratusarborComponent } from '../pages/productsinsidebratusarbor/productsinsidebratusarbor.component';
import { ProductsinsidebratustrigonoComponent } from '../pages/productsinsidebratustrigono/productsinsidebratustrigono.component';
import { RobbiechairComponent } from '../pages/robbiechair/robbiechair.component';
import { ProductsinsidestumpairshelfComponent } from '../pages/productsinsidestumpairshelf/productsinsidestumpairshelf.component';
import { ProductsinsidestumprobbiesofaComponent } from '../pages/productsinsidestumprobbiesofa/productsinsidestumprobbiesofa.component';
import { Productsinsidewing2Component } from '../pages/productsinsidewing2/productsinsidewing2.component';
import { ProductsinsidewingchairComponent } from '../pages/productsinsidewingchair/productsinsidewingchair.component';
import { ProductsinsidewingrackComponent } from '../pages/productsinsidewingrack/productsinsidewingrack.component';
import { ProductsinsideratiocorinthianComponent } from '../pages/productsinsideratiocorinthian/productsinsideratiocorinthian.component';
import { ProductsinsideratioionicComponent } from '../pages/productsinsideratioionic/productsinsideratioionic.component';
import { ProductsinsideratiodoricComponent } from '../pages/productsinsideratiodoric/productsinsideratiodoric.component';
import { ProductsinsideratioergosComponent } from '../pages/productsinsideratioergos/productsinsideratioergos.component';
import { ProductsinsideratiotableComponent } from '../pages/productsinsideratiotable/productsinsideratiotable.component';
import { ProductsinsideratiothewallComponent } from '../pages/productsinsideratiothewall/productsinsideratiothewall.component';
import { ProductsinsideliloComponent } from '../pages/productsinsidelilo/productsinsidelilo.component';
import { ProductsinsidelilokagamiComponent } from '../pages/productsinsidelilokagami/productsinsidelilokagami.component';
import { ProductsinsideliloneruComponent } from '../pages/productsinsideliloneru/productsinsideliloneru.component';
import { ProductsinsidelilozoComponent } from '../pages/productsinsidelilozo/productsinsidelilozo.component';
import { ProductsinsidemensaComponent } from '../pages/productsinsidemensa/productsinsidemensa.component';
import { ProductsinsidemensachaitableComponent } from '../pages/productsinsidemensachaitable/productsinsidemensachaitable.component';
import { ProductsinsidemensacornulaComponent } from '../pages/productsinsidemensacornula/productsinsidemensacornula.component';
import { ProductsinsidemensaroundcubeComponent } from '../pages/productsinsidemensaroundcube/productsinsidemensaroundcube.component';
import { ProductsinsidemensascootComponent } from '../pages/productsinsidemensascoot/productsinsidemensascoot.component';
import { ProductsinsidemensashadComponent } from '../pages/productsinsidemensashad/productsinsidemensashad.component';
import { ProductsinsidemensastolicaComponent } from '../pages/productsinsidemensastolica/productsinsidemensastolica.component';
import { ProductsinsidemiscellaneousarchitectureComponent } from '../pages/productsinsidemiscellaneousarchitecture/productsinsidemiscellaneousarchitecture.component';
import { ProductsinsidemiscellaneousinsulaComponent } from '../pages/productsinsidemiscellaneousinsula/productsinsidemiscellaneousinsula.component';
import { ProductsinsidemiscellaneouskreoComponent } from '../pages/productsinsidemiscellaneouskreo/productsinsidemiscellaneouskreo.component';
import { ProductsinsidemiscellaneouslouvreComponent } from '../pages/productsinsidemiscellaneouslouvre/productsinsidemiscellaneouslouvre.component';
import { ProductsinsidemiscellaneousquevenComponent } from '../pages/productsinsidemiscellaneousqueven/productsinsidemiscellaneousqueven.component';
import { CareersComponent } from '../components/careers/careers.component';
import { ProductsinsidemiscellaneousstratisComponent } from '../pages/productsinsidemiscellaneousstratis/productsinsidemiscellaneousstratis.component';
import { BlogpageComponent } from '../pages/blogs/blogpage/blogpage.component';
import { Blog1Component } from '../pages/blogs/blog1/blog1.component';
import { Blog2Component } from '../pages/blogs/blog2/blog2.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'blogs', component: BlogpageComponent },
  { path: 'extract1', component: Blog1Component },
  { path: 'extract2', component: Blog2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlucerna', component:ProductsinsideComponent },
  { path: 'productlucernaobtuse', component:ProductsinsidelucernaobtuseComponent },
  { path: 'productlucernapick', component:ProductsinsidelucernapickComponent },
  { path: 'productlucernapie', component:ProductlucernapieComponent },
  { path: 'productlucernarelica', component:ProductsinsidelucernarelicaComponent },
  { path: 'productbratus', component:ProductsinsidebratusComponent },
  { path: 'productbratustrigono', component:ProductsinsidebratustrigonoComponent },
  { path: 'productrobbiechair', component:RobbiechairComponent },
  { path: 'productbratusarbor', component:ProductsinsidebratusarborComponent },
  { path: 'productstump', component:ProductsinsidestumpComponent },
  { path: 'productstumpshelf', component:ProductsinsidestumpairshelfComponent },
  { path: 'productstumpsofa', component:ProductsinsidestumprobbiesofaComponent },
  { path: 'productwing', component:ProductsinsidewingComponent },
  { path: 'productwing2', component:Productsinsidewing2Component },
  { path: 'productwingchair', component:ProductsinsidewingchairComponent },
  { path: 'productwingrack', component:ProductsinsidewingrackComponent },
  { path: 'corinthian', component:ProductsinsideratiocorinthianComponent },
  { path: 'ionic', component:ProductsinsideratioionicComponent },
  { path: 'doric', component:ProductsinsideratiodoricComponent },
  { path: 'ergos', component:ProductsinsideratioergosComponent },
  { path: 'ratiotable', component:ProductsinsideratiotableComponent },
  { path: 'thewall', component:ProductsinsideratiothewallComponent },
  { path: 'lilo', component: ProductsinsideliloComponent },
  { path: 'kagami', component: ProductsinsidelilokagamiComponent },
  { path: 'neru', component: ProductsinsideliloneruComponent },
  { path: 'zo', component: ProductsinsidelilozoComponent },
  { path: 'mensa', component: ProductsinsidemensaComponent },
  { path: 'chaitable', component: ProductsinsidemensachaitableComponent },
  { path: 'cornula', component: ProductsinsidemensacornulaComponent },
  { path: 'roundcube', component: ProductsinsidemensaroundcubeComponent },
  { path: 'scoot', component: ProductsinsidemensascootComponent },
  { path: 'shad', component: ProductsinsidemensashadComponent },
  { path: 'stolica', component: ProductsinsidemensastolicaComponent },
  { path: 'architecture', component: ProductsinsidemiscellaneousarchitectureComponent },
  { path: 'insula', component: ProductsinsidemiscellaneousinsulaComponent },
  { path: 'kreo', component: ProductsinsidemiscellaneouskreoComponent },
  { path: 'louvre', component: ProductsinsidemiscellaneouslouvreComponent },
  { path: 'queven', component: ProductsinsidemiscellaneousquevenComponent },
  { path: 'stratis', component: ProductsinsidemiscellaneousstratisComponent },
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
