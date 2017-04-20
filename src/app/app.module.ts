/**
 * import required classes NgModule, ErrorHandler
 */
import { NgModule, ErrorHandler } from '@angular/core';
/**
 * import required classes IonicApp, IonicModule, IonicErrorHandler
 */
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
/**
 * import required classes MyApp
 */
import { MyApp } from './app.component';
/**
 * import required classes AboutPage
 */
import { AboutPage } from '../pages/about/about';
/**
 * import required classes ContactPage
 */
import { ContactPage } from '../pages/contact/contact';
/**
 * import required classes HomePage
 */
import { HomePage } from '../pages/home/home';
/**
 * import required classes TabsPage
 */
import { TabsPage } from '../pages/tabs/tabs';
/**
 * import required classes ScanPage
 */
import { ScanPage } from '../pages/scan/scan';
/**
 * import required classes BorrowInventoryItemsPage
 */
import { BorrowInventoryItemsPage } from '../pages/borrow-inventory-items/borrow-inventory-items';
/**
 * import required classes ReturnInventoryItemsPage
 */
import { ReturnInventoryItemsPage } from '../pages/return-inventory-items/return-inventory-items';

/**
 * NgModule loads the modules as well as the pages with
 * the options declarations, where these modules are loaded.
 * The next are the imports, which is only the IonicModule
 * with method fiorRoot for running MyApp. The bootstrap loads a design theme
 * called IonicApp. The entryComponents are these modules to load in
 * background, if the myApp is started. These modules are MyApp,
 * BorrowInventoryItemsPage, ReturnInventoryItemsPage, ScanPage, AboutPage,
 ContactPage, HomePage, TabsPage
 */
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
/**
 * export theis class as class AppModule
 */
export class AppModule {}
