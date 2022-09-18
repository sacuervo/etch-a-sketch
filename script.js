// TOP - PROJECT: ETCH-A-SKETCH 

// 1. Create a webpage with a 16x16 grid of square divs.

    // Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

    // It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

    // There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
        // - float/clear
        // - inline-block
        // - flexbox
        // - CSS Grid

    // Be careful with borders and margins, as they can adjust the size of the squares!

    // “OMG, why isn’t my grid being created???”
// Did you link your CSS stylesheet?

        // - Open your browser’s developer tools.
        // - Check if there are any errors in the JavaScript console.
        // - Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
        // - Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

    // Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

    // There are multiple ways to change the color of the divs, including:
        // adding a new class to the div.
        // changing the div’s background color using JavaScript.

// 3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

    // Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    // Also check out prompts.
    // You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

// 4. Push your project to GitHub!

// Extra Credit
// Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.


// ------------------------------------------------------- //

// CREATE createElement FUNCTION

let createElement = (n, elementString, target) =>{
    for (let i=1; i<=n; i++){
        const createEl = document.createElement(elementString);
        createEl.id = `${elementString}-${i}`;
        target.appendChild(createEl);
    }
}

// CREATE GRID AND BUTTON CONTAINERS

const body = document.querySelector('body');
createElement(2,'div',body);

// MAKE THE CREATED DIV INTO A GRID

const gridContainer = document.getElementById('div-2');
const gridStyle = gridContainer.style;

gridStyle.display = 'grid';


    // Fix the container's max-width:
    gridStyle.height = '580px';
    gridStyle.width = '580px';
    gridStyle.justifyContent = 'center';
    gridStyle.margin = '0px auto';
    gridStyle.border = '6px solid rgb(109, 156, 167)';
    gridStyle.borderRadius = '8px';

    //Fix the container's rows and columns;

    let fixGridCells = (columns, rows) =>{
        let finalRows = rows;
        let finalColumns = columns;
        if(columns>100 && rows>100){
            alert (`The maximum number of rows and columns is 100`);
            finalRows=100;
            finalColumns=100;
        } else if (columns > 100){
            alert (`The maximum number of columns is 100`)
            finalColumns = 100;
        } else if (rows > 100){
            alert (`The maximum number of rows is 100`)
            finalRows = 100;
        }
    createElement(finalRows*finalColumns, 'div', gridContainer,);
    gridStyle.gridTemplateColumns = `repeat(${finalRows},1fr`;
    gridStyle.gridTemplateRows = `repeat(${finalColumns},1fr`;
    }

    let gridCells = {rows:100, columns:100};

    let defineCells = fixGridCells(gridCells.rows, gridCells.columns);

// ADD A COMMON CLASS NAME FOR ALL OF THE BOXES

const selectAllBoxes = gridContainer.children;

for (let i = 0; i<selectAllBoxes.length; i++){
    selectAllBoxes[i].className = 'box';
}

// ADD A RANDOM COLOR FOR EACH BOX - TO DESIGN THE GRID

const generateRandomColor = () => { //FUNCTION WILL BE EXECUTED AFTER THE BLACK TRAIL
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

const gridBoxClass = document.querySelectorAll('.box');

    // * ACTIVATE FOR REGULAR BLACK PEN
    // [...gridBoxClass].forEach(function(item){
    //     item.addEventListener('mouseover', function(){
    //         item.style.backgroundColor = '#000';
    //     })
    // });

    let blackCounter = 0;
    let rgbaCounter = 0;

        // * ACTIVATE FOR DARKENING PEN (EXTRA CREDIT)
        [...gridBoxClass].forEach(function(item){
            item.addEventListener('mouseover', function(){
                let darkeningRgba = `rgba(0,0,0,0.${rgbaCounter})`;
                if (rgbaCounter === 10){
                    darkeningRgba = `rgba(0,0,0,1)`;
                    item.style.backgroundColor = darkeningRgba;
                }
                else if (darkeningRgba === `rgba(0,0,0,0.9)` && blackCounter ===9){
                    rgbaCounter = 10; 
                    darkeningRgba = `rgba(0,0,0,${rgbaCounter})`;
                    item.style.backgroundColor = darkeningRgba;
                    blackCounter = 0;

                } else if (blackCounter === 9){
                    rgbaCounter++;
                    blackCounter = 0;
                    item.style.backgroundColor = darkeningRgba;

                } else {
                    blackCounter++;
                    item.style.backgroundColor = darkeningRgba;
                }
            })
        });

    // * ACTIVATE FOR RANDOM COLOR PEN (BLACK AT EVERY 10)

    // [...gridBoxClass].forEach(function(item){
    //     item.addEventListener('mouseover', function(){
    //         if (blackCounter === 9){
    //             item.style.backgroundColor = '#000';
    //             blackCounter = 0;
    //         } else {
    //         item.style.backgroundColor = generateRandomColor();
    //         blackCounter++;
    //     }
    //     })
    // });
    
    // * ACTIVATE FOR  RANDOM COLORED TILES FROM THE BEGINNING

    // [...gridBoxClass].forEach(function(item){
    //     item.style.backgroundColor = generateRandomColor();
    // })

const buttonContainer = document.getElementById('div-1');

// Create button
createElement(1,'button',buttonContainer);

// SET BUTTON CONTAINER DIMENSIONS AND STYLING
styleButtonContainer = buttonContainer.style;
styleButtonContainer.paddingBottom = '16px';
styleButtonContainer.display = 'flex';
styleButtonContainer.justifyContent = 'flex-end';
styleButtonContainer.maxWidth = '580px';
styleButtonContainer.margin = '0px auto';

button = document.getElementById('button-1');
styleButton = button.style;

button.textContent = "NEW GRID";

styleButton.height = '32px';
styleButton.width = '142px';
styleButton.fontSize = '14px';
styleButton.fontWeight = 'bold';
styleButton.borderRadius = '12px';
styleButton.backgroundColor = 'rgb(36, 107, 123)';
styleButton.color = '#fff';


// ADD BUTTON EVENT LISTENER

button.addEventListener('click', function(){
    let askColumns = prompt('How many columns should your grid have?');
    let askRows = prompt('How many rows should your grid have?')
    gridCells.columns = askColumns;
    gridCells.rows = askRows;
    fixGridCells(askColumns, askRows);

    // ACTIVATE FOR NEW GRID WITH WHITE BACKGROUND

    [...gridBoxClass].forEach(function(item){
        item.style.backgroundColor = '#fff';
        blackCounter = 0;
        rgbaCounter = 0;
    }) 

    // ACTIVATE FOR  NEW GRID WITH RANDOM COLORED BACKGROUND

    // [...gridBoxClass].forEach(function(item){
    //     item.style.backgroundColor = generateRandomColor();
    //     blackCounter=0;
    //     rgbaCounter = 0;
    // }) 
})

