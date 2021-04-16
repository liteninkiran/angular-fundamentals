import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import
{
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { ToastrService } from './common/toastr.service';

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
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
    ],
    imports:
    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        ToastrService,
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
