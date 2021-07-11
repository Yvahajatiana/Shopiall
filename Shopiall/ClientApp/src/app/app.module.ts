import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { CommentModule } from './features/comment/comment.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UpsellModule } from './features/upsell/upsell.module';
import { AppRoutingModule } from './app.routes';
import { JwtModule } from '@auth0/angular-jwt';
import { TOKEN_KEY } from './core/token-storage.service';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { LayoutModule } from './layout/layout.module';

export function tokenGetter() {
  return localStorage.getItem(TOKEN_KEY);
}

@NgModule({
  declarations: [AppComponent],
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
    NgSelectModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    CommentModule,
    UpsellModule,
    AuthenticationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
