import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'membros', component: ObjetivoComponent},
  {path:'sobre-nos', component: SobreNosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
