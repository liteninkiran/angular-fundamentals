import { Component, EventEmitter, Input, Output } from "@angular/core";
import { withLatestFrom } from "rxjs/operators";

@Component(
{
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    templateUrl: 'upvote.component.html',
})

export class UpvoteComponent
{
    @Input() count:number;
    @Input() set voted(val)
    {
        this.iconColour = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();

    iconColour:string;

    onClick()
    {
        this.vote.emit({});
    }
}
