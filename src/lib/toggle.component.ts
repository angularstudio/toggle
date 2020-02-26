import { Component, Input } from '@angular/core';
import { Toggle }           from './toggle';

@Component({

    selector: 'toggle',

    template: `

        <div class="wrapper"
             [class.mat-elevation-z6]="config.shadow"
             [style.width]="config.width"
             [style.height]="config.height"
             [style.background-color]="config.backgroundColor">

            <div class="left">

                <i [class]="config.iconClass"
                   [style.font-size]="config.iconFontSize"
                   [style.color]="config.iconColor"></i>

            </div>

            <div class="center">

                <div class="title"
                     [style.color]="config.titleFontColor">{{ config.title }}</div>

                <div class="description"
                     [style.color]="config.descriptionFontColor">{{ config.description }}</div>

            </div>

            <div class="right">

                <mat-slide-toggle [color]="config.toggleColor"
                                  [style.color]="config.toggleFontColor">{{ config.toggleLabel }}</mat-slide-toggle>

            </div>

        </div>

    `,

    styleUrls: [ 'toggle.component.scss' ]

})
export class ToggleComponent {

    @Input() config: Toggle;

}
