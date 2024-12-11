import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
