// AXIS CHANGE
axes.forEach(axe => axe.addEventListener('change', event => {
value_axe = parseInt(axe.value);
emotion_of_current_axe = emo_axes[axe.id][axe.value];
// anytime an emotion axis updates
switch(axe.id) {


    case 's_axe1':
    bang = value_axe - parseInt(old_2);

    if ( // Intensity increased
        (Math.sign(parseInt(old_1)) == Math.sign(bang))
        ||
        (Math.sign(parseInt(old_1)) == 0)
        ) {
        axe2.value = abs_sub(axe2.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
        
    } else { // Intensity decreased
        
        axe2.value = abs_sub(axe2.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
    }
    break;

    case 's_axe2':
    bang = value_axe - parseInt(old_2);

    if ( // Intensity increased
        (Math.sign(parseInt(old_2)) == Math.sign(bang))
        ||
        (Math.sign(parseInt(old_2)) == 0)
        ) {
        axe1.value = abs_sub(axe1.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
        
    } else { // Intensity decreased
        
        axe1.value = abs_sub(axe1.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
    }
    break;

    case 's_axe3':
    bang = value_axe - parseInt(old_3);

    if ( // Intensity increased
        (Math.sign(parseInt(old_3)) == Math.sign(bang))
        ||
        (Math.sign(parseInt(old_3)) == 0)
        ) {
        axe1.value = abs_sub(axe1.value, 1);
        axe2.value = abs_sub(axe2.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
        
    } else { // Intensity decreased
        
        axe1.value = abs_sub(axe1.value, 1);
        axe2.value = abs_sub(axe2.value, 1);
        axe4.value = abs_sub(axe4.value, 1);
    }
    break;

    case 's_axe4':
    bang = value_axe - parseInt(old_4);

    if ( // Intensity increased
        (Math.sign(parseInt(old_4)) == Math.sign(bang))
        ||
        (Math.sign(parseInt(old_4)) == 0)
        ) {
        axe1.value = abs_sub(axe1.value, 1);
        axe2.value = abs_sub(axe2.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
        
    } else { // Intensity decreased
        
        axe1.value = abs_sub(axe1.value, 1);
        axe2.value = abs_sub(axe2.value, 1);
        axe3.value = abs_sub(axe3.value, 1);
    }
    break;

}

// DECIDE WHAT IS THE CURRENT EMOTION

switch (Math.abs(value_axe)) {

    // If the latest axis modified is at highest point
    case 3:
        console.log("case3");
        for (const el of axes) {
            // if a second axis is high
            if (Math.abs(parseInt(el.value)) == 2){
                emotion_of_second_axe = emo_axes[el.id][el.value];
                // if a compound emotion exists for the combination of the 2 axis
                if (emotion_of_second_axe in compound_emotions[emotion_of_current_axe]) {
                    current = compound_emotions[emotion_of_current_axe][emotion_of_second_axe];
                };
                break;
            } else {
            // The highest emotion becomes the current one
            current = emo_axes[axe.id][axe.value];
            };
        }
    break;
    
    case 2:
    // If the latest axis modified is equal to 2, it becomes the current emotion
    current = emo_axes[axe.id][axe.value];
    break;

    case 1:
    for (const el of axes) {
        if (Math.abs(parseInt(el.value)) == 2){
        current = emo_axes[el.id][el.value];
        break;
        } else {
        // The highest emotion becomes the current one
        current = emo_axes[axe.id][axe.value];
        };
    }
    break;
    case 0:
    var found_val_2 = found_val_1 = false;
    for (const el of axes) {
        if (Math.abs(parseInt(el.value)) == 2){
        found_val_2 = emo_axes[el.id][el.value];
        break;
        } else if (Math.abs(parseInt(el.value)) == 1){
        found_val_1 = emo_axes[el.id][el.value];
        };
    }
    if (found_val_2) {
        current = found_val_2
    } else if (found_val_1) {
        current = found_val_1
    } else {
        current = "neutral";
    };
    break;

};


// values caches
old_1 = axe1.value;
old_2 = axe2.value;
old_3 = axe3.value;
old_4 = axe4.value;

// update labels

o_axe1.innerHTML = emo_axes["s_axe1"][axe1.value];
o_axe2.innerHTML = emo_axes["s_axe2"][axe2.value];
o_axe3.innerHTML = emo_axes["s_axe3"][axe3.value];
o_axe4.innerHTML = emo_axes["s_axe4"][axe4.value];

emotion_to_cocktail();
move_cursor();
}));