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
