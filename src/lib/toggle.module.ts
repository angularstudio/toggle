import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToggleComponent }      from './toggle.component';

@NgModule({

    declarations: [ ToggleComponent ],
    imports: [

        CommonModule,
        MatSlideToggleModule

    ],
    exports: [ ToggleComponent ]

})
export class ToggleModule {
}
