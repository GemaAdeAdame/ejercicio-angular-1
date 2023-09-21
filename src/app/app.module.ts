import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryHeaderComponent } from './gallery-header/gallery-header.component';
import { GalleryBodyComponent } from './gallery-body/gallery-body.component';
import { GalleryFooterComponent } from './gallery-footer/gallery-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryHeaderComponent,
    GalleryBodyComponent,
    GalleryFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
