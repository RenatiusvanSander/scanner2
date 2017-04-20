/**
 * import required class platformBrowserDynamic
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * import required class AppModule
 */
import { AppModule } from './app.module';

/**
 * Bootstrap AppModule
 */
platformBrowserDynamic().bootstrapModule(AppModule);
