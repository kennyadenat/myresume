import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { MainComponent } from './views/main/main.component';
import { MiniHobbyComponent } from './component/mini-hobby/mini-hobby.component';
import { MiniSkillComponent } from './component/mini-skill/mini-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    LayoutMainComponent,
    MainComponent,
    MiniHobbyComponent,
    MiniSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
