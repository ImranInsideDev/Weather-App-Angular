import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './segment/home/home.component';
import { FavouriteComponent } from './segment/favourite/favourite.component';
import { RecentSearchComponent } from './segment/recent-search/recent-search.component';
import { ListCardComponent } from './commonComponent/list-card/list-card.component';
import { HttpClientModule} from '@angular/common/http';
import { NothingToShowComponent } from './commonComponent/nothing-to-show/nothing-to-show.component';
import { SortPipe } from './pipes/sort.pipe';
import { PopupModalComponent } from './commonComponent/popup-modal/popup-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavouriteComponent,
    RecentSearchComponent,
    ListCardComponent,
    NothingToShowComponent,
    SortPipe,
    PopupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
