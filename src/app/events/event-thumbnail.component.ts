import { Component, Input } from '@angular/core';

@Component(
{
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .green { color: #003300 !important }
        .bold { font-weight: bold; }

    `]
})

export class EventThumbnailComponent
{
    @Input() eventObj:any;

    getStartTimeClass()
    {
        const isEarlyStart = this.eventObj && this.eventObj.time === '8:00 am';

        let classesArr = [];
        let classes = '';

        if(isEarlyStart)
        {
            classes = 'green bold';
            classesArr = ['green', 'bold'];
        }

        // Return as string
        return classes;

        // Return as array of strings
        //return classesArr;

        // Return as object
        //return {green: isEarlyStart, bold: isEarlyStart};

    }
}
