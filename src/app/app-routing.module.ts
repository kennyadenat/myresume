import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { MainComponent } from './views/main/main.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ResumeComponent } from './views/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: MainComponent, pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },
      { path: 'portfolio', component: PortfolioComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
