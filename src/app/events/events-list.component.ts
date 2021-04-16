import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';
import { ToastrService } from '../common/toastr.service';

@Component(
{
    templateUrl: './events-list.component.html',
})

export class EventsListComponent implements OnInit
{
    events:IEvent[];

    constructor(private eventService: EventService, private route:ActivatedRoute, private toastr: ToastrService)
    {
        
    }

    ngOnInit()
    {
        // The 'events' argument below must match the name specified in the routes.ts file in the resolve property
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName)
    {
        this.toastr.success(eventName);
    }
}
