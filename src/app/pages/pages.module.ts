import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { CopounsModule } from './copouns/copouns.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OffersModule } from './offers/offers.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    CopounsModule,
    DashboardModule,
    OffersModule,
    TranslateModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
