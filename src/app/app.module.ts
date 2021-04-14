import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

@NgModule(
{
    declarations:
    [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavBarComponent,
        Error404Component,
    ],
    imports:
    [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    bootstrap:
    [
        EventsAppComponent
    ],
    providers:
    [
        EventService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
})

export class AppModule
{
    
}

export function checkDirtyState(component:CreateEventComponent)
{
    if(component.isDirty)
    {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    else
    {
        return true;
    }
}
