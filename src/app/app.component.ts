import { Component, ViewChildren, QueryList } from '@angular/core';
import { GuitarNoteComponent } from './guitar-note/guitar-note.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChildren('note') components:QueryList<any>;
    
    roots = [7, 2, 10, 5, 0, 7];
    neck = [[],[],[],[],[],[]];
    viewNeck = [[],[],[],[],[],[]]

    modes = [{degree:0,name:"Major/Ionian"},{degree:5,name:"Minor/Aeolian"}]

    notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    steps = [2, 2, 1, 2, 2, 2, 1]; 
    mode = 0;
    currSteps = [];
    
    chords = [[]];
    viewChords = [[]];

    root = 0;
    scale = [];
    viewScale = [];

    state = "active";
    state2 = "inactive";
    B = "B";

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

        this.buildChords(this.scale);
        this.buildViewScale(this.scale);
        this.buildViewNeck(this.scale);
    }

    buildViewScale(scale) {
        this.viewScale = scale.map(this.getNoteString, this)
    }
    
    buildChords(scale) {
        for (let i = 0; i < 7; i++) {
            this.chords[i] = this.buildChord(i, scale);
            this.viewChords[i] = this.chords[i].map(this.getNoteString, this);
        }
    }

    buildChord(root, scale) {
        return [scale[root%8], scale[(root+2)%8], scale[(root+4)%8]];
    }

    updateNotes(e) {
        console.log(e.state);
        console.log(e.note);

        this.components.forEach((child) => {
            if(e.note == child.note) {
                if(e.state == "active") {
                    child.on();
                } else {
                    child.off();
                }
            }
        });
                    
    }
}
