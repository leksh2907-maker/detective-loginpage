/* =====================================================
   GET ELEMENTS
===================================================== */

const cursor =
    document.getElementById("customCursor");

const board =
    document.getElementById("board");

const caseFile =
    document.getElementById("caseFile");

const evidenceCards =
    document.querySelectorAll(".evidence");

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalNumber =
    document.getElementById("modalNumber");

const closeModal =
    document.getElementById("closeModal");


/* =====================================================
   CUSTOM CURSOR
===================================================== */

let mouseX = -100;
let mouseY = -100;

let cursorX = -100;
let cursorY = -100;


document.addEventListener(
    "mousemove",
    function(event) {

        mouseX = event.clientX;
        mouseY = event.clientY;

    }
);


function moveCursor() {

    cursorX +=
        (mouseX - cursorX) * 0.18;

    cursorY +=
        (mouseY - cursorY) * 0.18;


    cursor.style.left =
        cursorX + "px";

    cursor.style.top =
        cursorY + "px";


    requestAnimationFrame(
        moveCursor
    );

}


moveCursor();



/* =====================================================
   EVIDENCE HOVER
===================================================== */

evidenceCards.forEach(
    function(card) {


        card.addEventListener(
            "mouseenter",
            function() {

                board.classList.add(
                    "has-active"
                );

                card.classList.add(
                    "active"
                );

                cursor.classList.add(
                    "cursor-evidence"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function() {

                board.classList.remove(
                    "has-active"
                );

                card.classList.remove(
                    "active"
                );

                cursor.classList.remove(
                    "cursor-evidence"
                );

            }
        );


        card.addEventListener(
            "click",
            function() {

                const title =
                    card.dataset.title;

                const number =
                    card.dataset.number;


                modalTitle.textContent =
                    title;

                modalNumber.textContent =
                    number;


                modal.classList.add(
                    "show"
                );

            }
        );


    }
);



/* =====================================================
   CLOSE EVIDENCE MODAL
===================================================== */

closeModal.addEventListener(
    "click",
    function() {

        modal.classList.remove(
            "show"
        );

    }
);


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            modal.classList.remove(
                "show"
            );

        }

    }
);



/* =====================================================
   BOARD PARALLAX
===================================================== */

let targetBoardX = 0;
let targetBoardY = 0;

let currentBoardX = 0;
let currentBoardY = 0;


document.addEventListener(
    "mousemove",
    function(event) {

        targetBoardX =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        targetBoardY =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;

    }
);


function animateBoard() {

    currentBoardX +=
        (
            targetBoardX -
            currentBoardX
        ) * 0.03;


    currentBoardY +=
        (
            targetBoardY -
            currentBoardY
        ) * 0.03;


    const strings =
        document.querySelector(
            ".strings"
        );


    if (strings) {

        strings.style.transform =
            `
            translate(
                ${currentBoardX * 4}px,
                ${currentBoardY * 4}px
            )
            `;

    }


    if (caseFile) {

        caseFile.style.marginLeft =
            `${currentBoardX * 4}px`;

        caseFile.style.marginTop =
            `${currentBoardY * 4}px`;

    }


    requestAnimationFrame(
        animateBoard
    );

}


animateBoard();



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            modal.classList.remove(
                "show"
            );

        }

    }
);



/* =====================================================
   MENU BUTTON
===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );

}