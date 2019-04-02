import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { ProductsComponent } from '../app/pages/products/products.component';
import { ComingupComponent } from '../app/pages/comingup/comingup.component';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsinsideComponent } from './pages/productsinside/productsinside.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ProductsinsidebratusComponent } from './pages/productsinsidebratus/productsinsidebratus.component';
import { ProductsinsidestumpComponent } from './pages/productsinsidestump/productsinsidestump.component';
import { ProductsinsidewingComponent } from './pages/productsinsidewing/productsinsidewing.component';
import { ProductsinsidelucernaobtuseComponent } from './pages/productsinsidelucernaobtuse/productsinsidelucernaobtuse.component';
import { ProductsinsidelucernapickComponent } from './pages/productsinsidelucernapick/productsinsidelucernapick.component';
import { ProductsinsidelucernarelicaComponent } from './pages/productsinsidelucernarelica/productsinsidelucernarelica.component';
import { ProductsinsidebratusarborComponent } from './pages/productsinsidebratusarbor/productsinsidebratusarbor.component';
import { ProductsinsidebratustrigonoComponent } from './pages/productsinsidebratustrigono/productsinsidebratustrigono.component';
import { RobbiechairComponent } from './pages/robbiechair/robbiechair.component';
import { ScrolltopComponent } from './components/scrolltop/scrolltop.component';
import { AssociationComponent } from './components/association/association.component';
import { ProductlucernapieComponent } from './pages/productlucernapie/productlucernapie.component';
import { ProductsinsidestumprobbiesofaComponent } from './pages/productsinsidestumprobbiesofa/productsinsidestumprobbiesofa.component';
import { ProductsinsidestumpairshelfComponent } from './pages/productsinsidestumpairshelf/productsinsidestumpairshelf.component';
import { Productsinsidewing2Component } from './pages/productsinsidewing2/productsinsidewing2.component';
import { ProductsinsidewingrackComponent } from './pages/productsinsidewingrack/productsinsidewingrack.component';
import { ProductsinsidewingchairComponent } from './pages/productsinsidewingchair/productsinsidewingchair.component';
import { ProductsinsideratiocorinthianComponent } from './pages/productsinsideratiocorinthian/productsinsideratiocorinthian.component';
import { ProductsinsideratioionicComponent } from './pages/productsinsideratioionic/productsinsideratioionic.component';
import { ProductsinsideratiodoricComponent } from './pages/productsinsideratiodoric/productsinsideratiodoric.component';
import { ProductsinsideratioergosComponent } from './pages/productsinsideratioergos/productsinsideratioergos.component';
import { ProductsinsideratiothewallComponent } from './pages/productsinsideratiothewall/productsinsideratiothewall.component';
import { ProductsinsideratiotableComponent } from './pages/productsinsideratiotable/productsinsideratiotable.component';
import { ProductsinsideliloComponent } from './pages/productsinsidelilo/productsinsidelilo.component';
import { ProductsinsidelilokagamiComponent } from './pages/productsinsidelilokagami/productsinsidelilokagami.component';
import { ProductsinsideliloneruComponent } from './pages/productsinsideliloneru/productsinsideliloneru.component';
import { ProductsinsidelilozoComponent } from './pages/productsinsidelilozo/productsinsidelilozo.component';
import { ProductsinsidemensaComponent } from './pages/productsinsidemensa/productsinsidemensa.component';
import { ProductsinsidemensachaitableComponent } from './pages/productsinsidemensachaitable/productsinsidemensachaitable.component';
import { ProductsinsidemensacornulaComponent } from './pages/productsinsidemensacornula/productsinsidemensacornula.component';
import { ProductsinsidemensaroundcubeComponent } from './pages/productsinsidemensaroundcube/productsinsidemensaroundcube.component';
import { ProductsinsidemensascootComponent } from './pages/productsinsidemensascoot/productsinsidemensascoot.component';
import { ProductsinsidemensashadComponent } from './pages/productsinsidemensashad/productsinsidemensashad.component';
import { ProductsinsidemensastolicaComponent } from './pages/productsinsidemensastolica/productsinsidemensastolica.component';
import { ProductsinsidemiscellaneousarchitectureComponent } from './pages/productsinsidemiscellaneousarchitecture/productsinsidemiscellaneousarchitecture.component';
import { ProductsinsidemiscellaneousinsulaComponent } from './pages/productsinsidemiscellaneousinsula/productsinsidemiscellaneousinsula.component';
import { ProductsinsidemiscellaneouskreoComponent } from './pages/productsinsidemiscellaneouskreo/productsinsidemiscellaneouskreo.component';
import { ProductsinsidemiscellaneouslouvreComponent } from './pages/productsinsidemiscellaneouslouvre/productsinsidemiscellaneouslouvre.component';
import { ProductsinsidemiscellaneousquevenComponent } from './pages/productsinsidemiscellaneousqueven/productsinsidemiscellaneousqueven.component';
import { CareersComponent } from './components/careers/careers.component';
import { ProductsinsidemiscellaneousstratisComponent } from './pages/productsinsidemiscellaneousstratis/productsinsidemiscellaneousstratis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ComingupComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProductsinsideComponent,
    ProductsinsidebratusComponent,
    ProductsinsidestumpComponent,
    ProductsinsidewingComponent,
    ProductsinsidelucernaobtuseComponent,
    ProductsinsidelucernapickComponent,
    ProductsinsidelucernarelicaComponent,
    ProductsinsidebratusarborComponent,
    ProductsinsidebratustrigonoComponent,
    RobbiechairComponent,
    ScrolltopComponent,
    AssociationComponent,
    ProductlucernapieComponent,
    ProductsinsidestumprobbiesofaComponent,
    ProductsinsidestumpairshelfComponent,
    Productsinsidewing2Component,
    ProductsinsidewingrackComponent,
    ProductsinsidewingchairComponent,
    ProductsinsideratiocorinthianComponent,
    ProductsinsideratioionicComponent,
    ProductsinsideratiodoricComponent,
    ProductsinsideratioergosComponent,
    ProductsinsideratiothewallComponent,
    ProductsinsideratiotableComponent,
    ProductsinsideliloComponent,
    ProductsinsidelilokagamiComponent,
    ProductsinsideliloneruComponent,
    ProductsinsidelilozoComponent,
    ProductsinsidemensaComponent,
    ProductsinsidemensachaitableComponent,
    ProductsinsidemensacornulaComponent,
    ProductsinsidemensaroundcubeComponent,
    ProductsinsidemensascootComponent,
    ProductsinsidemensashadComponent,
    ProductsinsidemensastolicaComponent,
    ProductsinsidemiscellaneousarchitectureComponent,
    ProductsinsidemiscellaneousinsulaComponent,
    ProductsinsidemiscellaneouskreoComponent,
    ProductsinsidemiscellaneouslouvreComponent,
    ProductsinsidemiscellaneousquevenComponent,
    CareersComponent,
    ProductsinsidemiscellaneousstratisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
