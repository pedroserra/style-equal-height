import debounce from 'debounce';

const groups = {};

let element;

export const trigger = debounce(function() {
    if (!element) {
        element = document.createElement('style');
        document
            .body
            .appendChild(element);
    }
    element.innerHTML = '';

    let css = ['/* style-equal-height generated tag */'];
    Object
        .keys(groups)
        .forEach(selector => {
            let heights = Object
                    .values(document.querySelectorAll(selector))
                    .map(el => {
                        return el.offsetHeight;
                    }),
                max = Math
                    .max
                    .apply(Math, heights);

            css.push(`${selector} { height: ${max}px; } `);
        });

    element.innerHTML = '\n'+css.join('\n')+'\n';
}, 100);

export function add(selector) {
    groups[selector] = true;
    trigger();
}

export function remove(selector) {
    delete groups[selector];
}
