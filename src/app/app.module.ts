import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { authReducer } from './auth/reducers/auth.reducer';
import { AuthEffects } from './auth/effects/auth.effects';
import { crudReducer } from './crud/reducers/crud.reducer';
import { CrudEffects } from './crud/effects/crud.effects';

import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Correct import path
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Correct import
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      crud: crudReducer,
    }),
    EffectsModule.forRoot([AuthEffects, CrudEffects]),
  ],
  providers: [provideHttpClient(),{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
