/**
 * import class Component
 */
import { Component } from '@angular/core';
/**
 * import class Platform
 */
import { Platform } from 'ionic-angular';
/**
 * import classes StatusBar, Splashscreen
 */
import { StatusBar, Splashscreen } from 'ionic-native';
/**
 * import class TabsPage
 */
import { TabsPage } from '../pages/tabs/tabs';

/**
 * start Component View app.html
 */
@Component({
  templateUrl: 'app.html'
})
/**
 * exports class MyApp
 */
export class MyApp {
  rootPage = TabsPage;

  /**
   * MyApp Constructor gets a platform object.
   * When it is ready, it loads the statusBar
   * and hiodes the Splashscreen.
   *
   * @constructor
   * @param platform
   */
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
