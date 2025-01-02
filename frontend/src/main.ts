import { AppConfigModule } from './app/app.config';  // Importing the correct module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppConfigModule) // Bootstrapping the AppConfigModule
  .catch(err => console.error(err));
