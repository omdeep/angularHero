import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SelectMenuComponent } from './select-menu/select-menu.component';

// pipes
import { SearchPipe } from './pipes/search/search.pipe';

const COMPONENTS = [
  AppComponent,
  HeroesComponent,
  HeroDetailComponent,
  SelectMenuComponent
];

const PIPES = [
  SearchPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
