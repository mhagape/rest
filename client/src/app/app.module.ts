import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToasterModule, ToasterService } from 'angular2-toaster';

import { ROUTES } from './routes';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService, ClientsRawService, ClientsToastDecoratorService  } from './clients.service';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ToasterModule
  ],
  providers: [
    ClientsRawService,
    { provide: ClientsService, useClass: ClientsToastDecoratorService , deps: [ ClientsRawService, ToasterService ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
