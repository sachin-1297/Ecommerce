import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { ProductViewComponent } from './product-view/product-view.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { SideNavComponent } from './static/side-nav/side-nav.component';
import { ToolbarComponent } from './static/toolbar/toolbar.component';
import { FooterComponent } from './static/footer/footer.component';
import { AddressDiagComponent } from './dialogues/address-diag/address-diag.component';
import { MainRoutingModule } from './main.routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { AuthService } from './services/auth.service';
import { HomeService } from './services/home.service';
import {CarouselModule} from 'primeng/carousel';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    ProductViewComponent,
    PaymentGatewayComponent,
    SideNavComponent,
    ToolbarComponent,
    FooterComponent,  
    AddressDiagComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTableModule,
    CarouselModule,
    MatGridListModule
    
  ],
  providers: [AuthService,
  HomeService]
})
export class MainWebsiteModule { }
