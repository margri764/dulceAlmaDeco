import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { forwardRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { Cart } from './model/cart.model';
import { HttpClientModule } from "@angular/common/http";
import { FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import { MessageService } from "./servicios/message.service";
import { MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputControlModule } from './input-control/input-control.module';
import { HashLocationStrategy,LocationStrategy} from'@angular/common';


//servicios y rutas
import { ServarrayfotosService } from './servicios/servarrayfotos.service'; 
import { NotificationService } from './servicios/notification.service';
                                                      
                                                      
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FofacilComponent } from './componentes/fofacil/fofacil.component';
import { SellosComponent } from './componentes/sellos/sellos.component';
import { StencilComponent } from './componentes/stencil/stencil.component';
import { LaminasComponent } from './componentes/laminas/laminas.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';
import { PatizaComponent } from './componentes/patiza/patiza.component';
import { AcrilicosComponent } from './componentes/acrilicos/acrilicos.component';
import { VariosComponent } from './componentes/varios/varios.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VerdetalleComponent } from './componentes/verdetalle/verdetalle.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ContactusComponent } from './componentes/contactus/contactus.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InputControlComponent } from './input-control/input-control.component';
import { TallerComponent } from './componentes/taller/taller.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { SlideoffComponent } from './componentes/slideoff/slideoff.component';


//rutas
  const routes: Routes = [  
  { path: 'navbar', component: NavbarComponent }, 
  { path: 'ubicacion', component: UbicacionComponent }, 
  { path: 'taller', component: TallerComponent },
  { path: 'input-control', component: InputControlComponent },  
  { path: 'contactus', component: ContactusComponent },    
  { path: 'fofacil', component: FofacilComponent }, 
  { path: 'verdetalle/:id', component: VerdetalleComponent }, 
  { path: 'sellos', component: SellosComponent },
  { path: 'stencil', component: StencilComponent }, 
  { path: 'laminas', component:LaminasComponent }, 
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'patiza', component: PatizaComponent },  
  { path: 'acrilicos', component: AcrilicosComponent }, 
  { path: 'carrito', component: CarritoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent}, 
  { path: '**', redirectTo: 'InicioComponent', pathMatch: 'full' }, 
 
 ];





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FofacilComponent,
    SellosComponent,
    StencilComponent,
    LaminasComponent,
    AccesoriosComponent,
    PatizaComponent,
    AcrilicosComponent,
    VariosComponent,
    InicioComponent,
    VerdetalleComponent,
    CarritoComponent,
    ContactusComponent,
    NavbarComponent,
    TallerComponent,
    UbicacionComponent,
    SlideoffComponent,
   
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSnackBarModule,
    InputControlModule
 

  ],
  providers: [
    ServarrayfotosService,
    Cart,
    MessageService,
    NotificationService,
    {
      provide: MatDialogRef,
      useValue:{}
    },
   {provide: LocationStrategy, useClass:HashLocationStrategy
   },
  
  
  ],
  bootstrap: [AppComponent],
  entryComponents: [CarritoComponent]
})
export class AppModule { }
