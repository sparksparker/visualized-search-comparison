// Constants
const FONT_SIZE = 10;
const SEARCH_HEAD_LENGTH = 25;
const SEARCH_HEAD_WIDTH = 10;

let p5js = function (p) {
    
    let search = new visualLinearSearch(p, [1, 2, 45, 3, 2]);
        search.startSearchFor(4);
        search.step();
    
    p.setup = function() {
        // Save height and width for later positioning
        let cnv = document.getElementById('theCanvas');
        this.width = cnv.offsetWidth;
        this.height = cnv.offsetHeight;
        
        //Configure p5
        p.textSize(FONT_SIZE);
        p.createCanvas(this.width, this.height);

        
    }

    p.draw = function () {
        p.background(256);
        search.show();
    }
} 

// This step is crucial for the p5 sketch to be displayed.
let theP5Sketch = new p5(p5js, 'theCanvas');