import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    roots = [7, 2, 10, 5, 0, 7];
    neck = [[],[],[],[],[],[]];
    viewNeck = [[],[],[],[],[],[]]

    modes = [{degree:0,name:"Major/Ionian"},{degree:5,name:"Minor/Aeolian"}]

    notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    steps = [2, 2, 1, 2, 2, 2, 1]; 
    mode = 0;
    currSteps = [];
    
    root = 0;
    scale = [];
    viewScale = [];

    constructor() {
        this.buildNeck(this.roots);
        this.buildSteps(this.mode);
    }

    getNoteString(note) {
        if(note == null) {
            return "-";
        } else {
            return this.notes[note];
        }
    }
    
    buildNeck(roots) {
        for(let i = 0; i < 6; i++) {
            for(let j = 0; j < 24; j++) {
                this.neck[i][j] = (roots[i] + j) % 12;
            }
        }
    }

    buildViewNeck(scale) {
        let newNeck = [[],[],[],[],[],[]];
        for(let i = 0; i < 6; i++) {
            for(let j = 0; j < 24; j++) {
               if(scale.includes(this.neck[i][j])) {
                   newNeck[i][j] = this.neck[i][j];
               } else {
                   newNeck[i][j] = null;
               }
            }
        }
        this.viewNeck = newNeck;
    }

    buildSteps(mode) {
        let newSteps = [];
        for (let i = 0; i < 7; i++) {
            newSteps[i] = this.steps[(this.mode + i) % 7]
        }
        this.currSteps = newSteps;

        this.buildScale(this.root);
    }

    buildScale(root) {
        console.log(root);
        let step = Number(root);
        let newScale = [];
        for (let i = 0; i < 8; i++) {
            newScale[i] = step;
            step = (step + this.currSteps[i]) % 12
        }
        this.scale = newScale;

        this.buildViewScale(this.scale);
        this.buildViewNeck(this.scale);
    }

    buildViewScale(scale) {
        this.viewScale = scale.map(this.getNoteString, this)
    }
    
}
