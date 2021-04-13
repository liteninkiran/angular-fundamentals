import { Component } from '@angular/core';

@Component(
{
    selector: 'events-list',
    template: `
        <div>

            <h1>Upcoming Angular Events</h1>

            <hr>

            <event-thumbnail [event]="eventObj"></event-thumbnail>

        </div>
    `,
})

export class EventsListComponent
{
    eventObj =
    {
        id: 1,
        name: 'Angular Connect',
        date: '26/09/2025',
        time: '10:00 AM',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location:
        {
            address: '10 Shaftesbury Avenue',
            city: 'London',
            country: 'England'
        }
    }
}
