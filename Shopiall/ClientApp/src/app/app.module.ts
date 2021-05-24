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
import { UpsellListComponent } from './upsell/components/upsell-list/upsell-list.component';
import { UpsellModule } from './upsell/upsell.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          children: [
            {
              path: 'comments',
              component: CommentMainComponent,
            },
            {
              path: 'upsells',
              component: UpsellListComponent,
            },
          ],
        },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ name: 'Shopiall' }),
    MaterialModule,
    SharedModule,
    CommentModule,
    UpsellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
