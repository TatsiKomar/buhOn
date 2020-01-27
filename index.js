window.onload = function () {
    const cells = document.getElementsByClassName('cell');
    let isActive = false;
    for (let cell of cells) {
        console.log(cells);
        cell.addEventListener('click', (event) => {
            console.log(cell);
            if (isActive) {
                for (let c1 of cells) {
                    c1.classList.remove('active');
                }
            }  
            isActive = true;
            cell.classList.add('active');
        });
        }

    const boxs = document.getElementsByClassName('box');
    let isChecked = false;
    for (let box of boxs) {
            console.log(boxs);
            box.addEventListener('click', (event) => {
                console.log(box);
                if (isChecked) {
                    for (let b1 of boxs) {
                        b1.classList.remove('active');
                    }
                }  
                isChecked = true;
                box.classList.add('active');
            });
            }




        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let activeTextId = 1;

        nextButton.addEventListener('click', () => {
            //activeTextId == 1
            console.log(activeTextId);

            if (activeTextId === 4) {
                activeTextId = 1;
            } else {
                activeTextId++; 
            }
            console.log(activeTextId);
            //activeTextId == 2

           document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId - 1}`).style.opacity = 0;
           //document.getElementById(`text${activeTextId}`).classList.add('active');
            
            let op = 0;
            while (op <= 1) {
                let _op = op + 0.05;
                setTimeout(() => {
                    document.getElementById (`text${activeTextId}`).style.opacity = _op;
                }, 60 + _op * 200);

                op += 0.05;
                console.log(op);
            }
            
            document.getElementById(`round${activeTextId == 1 ? 4 : activeTextId - 1}`).classList.remove('round_active');
            document.getElementById(`round${activeTextId}`).classList.add('round_active');
        });

            prevButton.addEventListener('click', () => {
                if (activeTextId === 1) {
                    activeTextId = 4;
                } else {
                    activeTextId--;
                }
                
            document.getElementById(`text${activeTextId == 4 ? 1 : activeTextId + 1}`).style.opacity = 0;
            // document.getElementById(`text${activeTextId}`).classList.add('active');

            let op = 0;
            while (op <= 1) {
                let _op = op + 0.05;
                setTimeout(() => {
                     document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op += 0.05;
            console.log(op);
        }
                document.getElementById(`round${activeTextId == 4 ? 1 : activeTextId + 1}`).classList.remove('round_active');
                document.getElementById(`round${activeTextId}`).classList.add('round_active');
                console.log(activeTextId);
            });




        const backButton = document.getElementById('back');
        const forthButton = document.getElementById('forth');
        let pressedTextId = 1;

        forthButton.addEventListener('click', () => {
            console.log(pressedTextId);

            if (pressedTextId === 4) {
                pressedTextId = 1;
            } else {
                pressedTextId++;
            }
            console.log(pressedTextId);

            document.getElementById(`circle${pressedTextId == 1 ? 4 : pressedTextId - 1}`).classList.remove('circle_active');
            document.getElementById(`circle${pressedTextId}`).classList.add('circle_active');

        });

        backButton.addEventListener('click', () => {
            if (pressedTextId === 1) {
                pressedTextId = 4;
            } else {
                pressedTextId--;
            }
        document.getElementById(`circle${pressedTextId == 4 ? 1 : pressedTextId + 1}`).classList.remove('circle_active');
        document.getElementById(`circle${pressedTextId}`).classList.add('circle_active');
        });


        const oldButton = document.getElementById('old');
        const newButton = document.getElementById('new');
        let pushedTextId = 1;

        newButton.addEventListener('click', () => {
            console.log(pushedTextId);

            if (pushedTextId === 4) {
                pushedTextId = 1;
            } else {
                pushedTextId++;
            }
            console.log(pushedTextId);

            document.getElementById(`dot${pushedTextId == 1 ? 4 : pushedTextId - 1}`).classList.remove('dot_active');
            document.getElementById(`dot${pushedTextId}`).classList.add('dot_active');

        });

        oldButton.addEventListener('click', () => {
            if (pushedTextId === 1) {
                pushedTextId = 4;
            } else {
                pushedTextId--;
            }
        document.getElementById(`dot${pushedTextId == 4 ? 1 : pushedTextId + 1}`).classList.remove('dot_active');
        document.getElementById(`dot${pushedTextId}`).classList.add('dot_active');
        });
    };    
    
    
