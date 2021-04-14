import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component(
{
    templateUrl: './events-list.component.html',
})

export class EventsListComponent implements OnInit
{
    events:any;

    constructor(private eventService: EventService, private route:ActivatedRoute)
    {
        
    }

    ngOnInit()
    {
        // The 'events' argument below must match the name specified in the routes.ts file in the resolve property
        this.events = this.route.snapshot.data['events'];
    }
}
