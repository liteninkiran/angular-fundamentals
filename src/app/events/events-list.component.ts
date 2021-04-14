import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component(
{
    templateUrl: './events-list.component.html',
})

export class EventsListComponent implements OnInit
{
    events:any[] = [];

    constructor(private eventService: EventService)
    {
        
    }

    ngOnInit()
    {
        this.events = this.eventService.getEvents()
    }
}
