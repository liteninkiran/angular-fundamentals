import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component(
{
    templateUrl: './create-event.component.html',
    styles:
    [`
        em { float:right; color:#E05C65; padding-left:10px; }
        .error input { background-color: #E3C3C5; }
        .error textarea { background-color: #E3C3C5; }

        .error ::-webkit-input-placeholder { color:#999; }  /*   Safari / iOS   */
        .error ::-moz-placeholder { color:#999; }           /*   Mozilla 19+    */
        .error :-moz-placeholder { color:#999; }            /*   Mozilla 18-    */
        .error :ms-input-placeholder { color:#999; }        /*   IE 10+         */
    `]
})

export class CreateEventComponent
{
    newEvent

    isDirty:boolean = true;

    constructor(private eventService: EventService, private router:Router)
    {

    }

    saveEvent(formValues)
    {
        this.eventService.saveEvent(formValues).subscribe(() =>
        {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel()
    {
        this.router.navigate(['/events']);
    }
}
