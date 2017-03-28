import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ScanPage } from '../pages/scan/scan';
import { BorrowInventoryItemsPage } from '../pages/borrow-inventory-items/borrow-inventory-items';
import { ReturnInventoryItemsPage } from '../pages/return-inventory-items/return-inventory-items';

@NgModule({
  declarations: [
    MyApp,
    BorrowInventoryItemsPage,
    ReturnInventoryItemsPage,
    ScanPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BorrowInventoryItemsPage,
    ReturnInventoryItemsPage,
    ScanPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
