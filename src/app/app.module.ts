import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { PostsService } from './services/posts.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from './services/albums.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule ,
    MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [PostsService ,AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
