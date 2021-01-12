import { createPopper } from '@popperjs/core';

const button = document.querySelector("#introDot1");
const tooltip = document.querySelector("#introTooltip1");

function toggle() {
    if(button.classList.contains('active')) {
        button.classList.remove('active');
        tooltip.classList.remove('active');
    } else {
        button.classList.add('active');
        tooltip.classList.add("active");
        createPopper(button, tooltip, {
            placement: 'left'
        });
    }
}
button.addEventListener('click', toggle);
