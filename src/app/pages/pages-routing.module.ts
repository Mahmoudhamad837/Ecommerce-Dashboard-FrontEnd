import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { OffersComponent } from './offers/offers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CopounsComponent } from './copouns/copouns.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path:'categories',
      component: CategoriesComponent
    },
    {
      path:'orders',
      component: OrdersComponent
    },
    {
      path:'copouns',
      component: CopounsComponent
    },
    {
      path:'dashboard',
      component: DashboardComponent
    },
    {
      path:'offers',
      component: OffersComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
