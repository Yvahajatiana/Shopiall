import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { CommentModule } from './comment/comment.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CommentMainComponent } from './comment/comment-main/comment-main.component';
import { UpsellModule } from './upsell/upsell.module';
import { UpsellMainComponent } from './upsell/components/upsell-main/upsell-main.component';
import { AppRoutingModule } from './app.routes';
import { JwtModule } from '@auth0/angular-jwt';
import { TOKEN_KEY } from './core/token-storage.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { authInterceptorProviders } from './core/auth-interceptor.service';
import { CoreModule } from './core/core.module';

export function tokenGetter() {
  return localStorage.getItem(TOKEN_KEY);
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [
          'localhost:5000',
          'localhost:5001',
          'kiassylocal.freeboxos.fr',
        ],
        disallowedRoutes: [],
      },
    }),
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ name: 'Shopiall' }),
    CoreModule.forRoot(),
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    CommentModule,
    UpsellModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
