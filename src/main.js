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

    let css = [
        '/* style-equal-height generated tag */', ...Object
            .values(groups)
            .map(group => {
                let heights = Object
                        .values(document.querySelectorAll(group.selector))
                        .map(el => {
                            return el.offsetHeight;
                        }),
                    max = Math
                        .max
                        .apply(Math, heights);

                if (group.mediaQuery) {
                    return `@media (${group.mediaQuery}) { ${group.selector} { height: ${max}px; } }`;
                } else {
                    return `${group.selector} { height: ${max}px; } `;
                }
            })
    ];

    element.innerHTML = '\n' + css.join('\n') + '\n';
}, 100);

export function add(selector, mediaQuery) {
    groups[selector + '-' + mediaQuery] = {
        selector,
        mediaQuery
    };
    trigger();
}

export function remove(selector, mediaQuery) {
    delete groups[selector];
}
