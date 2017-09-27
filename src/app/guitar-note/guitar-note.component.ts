import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'guitar-note',
    templateUrl: './guitar-note.component.html',
    styleUrls: ['./guitar-note.component.css'],
    animations: [
        trigger('state', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active',   style({
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class GuitarNoteComponent implements OnInit {
   
    private state = "active";
    @Input() note = "A";
    @Input() show = true;
    @Output() stateChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    hi() {
        console.log("hi");
    }

    toggle() {
        if(this.state == "active") {
            this.state = "inactive";
        } else {
            this.state = "active";
        }
        this.stateChange.emit({ state:this.state, note:this.note });
    }

    on() {
        this.state = "active";
    }

    off() {
        this.state = "inactive";
    }
}
