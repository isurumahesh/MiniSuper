import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '', redirectTo: '/customer', pathMatch: 'full',
  },

  {
    path: 'product', loadChildren: './modules/product/product.module#ProductModule',
  },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
