import { Component } from '@angular/core';

@Component(
{
    selector: 'events-list',
    templateUrl: './events-list.component.html',
})

export class EventsListComponent
{
    event =
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
