import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule()
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)]
}).catch(err => console.error(err));
