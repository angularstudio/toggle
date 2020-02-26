import { ThemePalette } from '@angular/material/core';

export class Toggle {

    public backgroundColor?: string;

    public iconClass?: string;
    public iconColor?: string;
    public iconFontSize?: string;

    public title?: string;
    public titleFontColor?: string;

    public description?: string;
    public descriptionFontColor?: string;

    public toggleLabel?: string;
    public toggleColor?: ThemePalette;
    public toggleFontColor?: string;
    public shadow?: boolean = true;

    public width?: string;
    public height?: string;

    public constructor(o: Toggle) {

        Object.assign(this, o);

    }

}
