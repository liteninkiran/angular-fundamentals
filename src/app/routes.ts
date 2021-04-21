import { Routes } from '@angular/router';
/*
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventResolver } from './events/event-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
*/

import
{
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent,
} from './events/index';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes =
[
    // Events
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events',
        component: EventsListComponent,
        resolve:
        {
            events: EventListResolver
        }
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        resolve:
        {
            event: EventResolver
        }
    },

    // User
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
    },    

    {
        path: 'events/session/new',
        component: CreateSessionComponent,
    },

    // Error
    {
        path: '404',
        component: Error404Component,
    },

    // Root
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full',
    },
]
