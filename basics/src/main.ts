import { enableProdMode, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

