// #region select-all

$('#issue-selector-all').click(function(event) {   
    if(this.checked) {
        $('.issue-checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
        $('.issue-checkbox').each(function() {
            this.checked = false;                       
        });
    }
});


$('#author-selector-all').click(function(event) {   
    if(this.checked) {
        $('.author-checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
        $('.author-checkbox').each(function() {
            this.checked = false;                       
        });
    }
});


$('#tag-selector-all').click(function(event) {   
    if(this.checked) {
        $('.tag-checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
        $('.tag-checkbox').each(function() {
            this.checked = false;                       
        });
    }
});

// #endregion

// #region text-cycle

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

const CYCLE_INTERVAL = 3000; // in ms

let cycleItems = shuffle(Array.from(document.getElementsByClassName('cycle-item')));
cycleIndex = 0;

let cycleItem = cycleItems[cycleIndex];

const cycle = setInterval(() => {
    cycleItem.classList.remove('cycle-item-appearing', 'cycle-item-disappearing');
    cycleItem = cycleItems[cycleIndex];

    // Assign random color to the item
    if (!cycleItem.style.color) {
    cycleItem.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    cycleItem.classList.add('cycle-item-appearing');

    setTimeout(() => {
        cycleItem.classList.add('cycle-item-disappearing');
    }, CYCLE_INTERVAL/2);

    if (cycleIndex === cycleItems.length-1) {
        cycleIndex = 0;
    } else {
        cycleIndex += 1;
    }
}, CYCLE_INTERVAL);

// #endregion
