import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    RobbiechairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
