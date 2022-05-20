import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionFourComponent } from './option-four/option-four.component';
import { OptionOneComponent } from './option-one/option-one.component';
import { OptionThreeComponent } from './option-three/option-three.component';
import { OptionTwoComponent } from './option-two/option-two.component';

const routes: Routes = [
  { path: 'option-1', component: OptionOneComponent },
  { path: 'option-2', component: OptionTwoComponent },
  { path: 'option-3', component: OptionThreeComponent },
  { path: 'option-4', component: OptionFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
