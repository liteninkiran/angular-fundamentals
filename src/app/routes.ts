import { Routes } from '@angular/router';

import
{
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
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
        canActivate: [EventRouteActivator]
    },

    // User
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
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
