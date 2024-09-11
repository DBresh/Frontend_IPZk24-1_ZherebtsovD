document.querySelector("body").style.font = "1rem arial";

let values = 
{
    "color": ["orange", "blue", "red" ],
    "background-color": ["yellow", "lightblue", "lightcoral"],
    "font-size": ["16px", "14px", "12px"],
    "padding": ["5px","5px","5px"],
    "text-align": ["center", "end", "start"],
}

let p = document.querySelectorAll("p");

p.forEach((element, index) => {
    Object.keys(values).forEach(styleName => {
        element.style[styleName] = values[styleName][index];
    });
});