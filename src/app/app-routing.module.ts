import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { MainComponent } from './views/main/main.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ResumeComponent } from './views/resume/resume.component';
import { GsimpComponent } from './views/study/gsimp/gsimp.component';
import { PvpComponent } from './views/study/pvp/pvp.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: MainComponent, pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'portfolio/pvp', component: PvpComponent },
      { path: 'portfolio/gsimp', component: GsimpComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
