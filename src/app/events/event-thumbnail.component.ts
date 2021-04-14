import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component(
{
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }

    `]
})

export class EventThumbnailComponent
{
    @Input() eventObj:IEvent;
/*
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
*/
    getStartTimeStyle():any
    {
        const isEarlyStart = this.eventObj && this.eventObj.time === '8:00 am';

        if(isEarlyStart)
        {
            // Return as object
            return {'color': '#003300', 'font-weight': 'bold'};

        }

        // Return empty object
        return {};
    }    
}
