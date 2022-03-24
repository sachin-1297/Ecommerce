import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
