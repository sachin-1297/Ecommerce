import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'', loadChildren: () => import('./main-website/main-website.module').then((m) => m.MainWebsiteModule)},
{path:'main', loadChildren: () => import('./main-website/main-website.module').then((m) => m.MainWebsiteModule)},
{path:'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
