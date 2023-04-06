import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RadioPageComponent } from './radio-page.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: RadioPageComponent }]),
  ],
  declarations: [RadioPageComponent],
  exports: [RadioPageComponent],
})
export class RadioPageModule {
  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params.id;
    console.log('id:', id);

    this.activatedRoute.params.subscribe((params) => {
      console.log('params', params);
    });
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('queryParams', queryParams);
    });
  }
}
