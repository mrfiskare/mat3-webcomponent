import {
  bootstrapApplication,
  createApplication
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

/* * * * * * * * * * * * * * * * *
 * Inject application into DOM   *
 * * * * * * * * * * * * * * * * */

// const appRoot = document.createElement('app-root');
// document.body.appendChild(appRoot);
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

/* * * * * * * * * * * * * * * * * * *
 * Creating webcomponent application *
 *  * * * * * * * * * * * * * * * *  */

(async () => {
  const app = await createApplication(appConfig);

  const appElement = createCustomElement(AppComponent, {
    injector: app.injector
  });

  customElements.define('mat3-webcomponent', appElement);
})();
