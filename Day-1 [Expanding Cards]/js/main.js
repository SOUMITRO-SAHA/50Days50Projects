//DOM addresses:
const mainContainer = document.getElementById("main-container");

const inputPhotoLinkDiv = document.getElementById("adding-photo-link")
const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");

// Variables:


// Creating an Array for Storing the newly added Photo-Links
const photosObjectArray = [
    {
        link: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Explore The World"
    },
    {
        link: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Wild Forest"
    },
    {
        link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        name: "Sunny Beach"
    }, {
        link: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Mountains - Clouds"
    }
];

let panelCount = photosObjectArray.length;

console.log(panelCount);
console.log(photosObjectArray);


// Initil photos Updation:
if (mainContainer.children.length === 0) {
    renderPanels();
}

mainContainer.addEventListener("click", chengeActiveClass);


// Function for Changing the Active Class:
function chengeActiveClass(e) {
    const panels = document.getElementsByClassName("panel");
    //forLoop:
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
    }
    e.target.classList.add("active");
}



//Opening the Input Box:
inputBtn.addEventListener("click", () => {
    //Displaying the Input Div:
    inputPhotoLinkDiv.style.display = "block";
})

//Taking the Value of Input Box
inputPhotoLinkDiv.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        if (inputBox.value) {
            let inputValue = inputBox.value;
            let inputPhotoName = fintTheName(inputValue);
            const inputObj = {
                link: inputValue,
                name: inputPhotoName
            }
            photosObjectArray.push(inputObj);
            // Rendering The Newly added Panels to the Web
            renderPanels(panelCount);
            // Updating the PanelCount:
            panelCount++;
        }
        //Hidding the Display of InputBox:
        inputPhotoLinkDiv.style.display = "none";

    }
})






// Function to render the Links to the HTML Page:
function renderLinks(link, name) {
    let panelDiv = `
    <div id="panel${panelCount}" class="panel" style="background-image: url('${link}')">
        <h3>${name}</h3>
    </div>
    `;
    mainContainer.innerHTML += panelDiv;
}

// Function for Rendering the Panels on the HTML Page:
function renderPanels(initialValue = 0) {
    // Time-Complexity for this Function is O(n);
    let i = initialValue
    for (; i < photosObjectArray.length; i++) {
        renderLinks(photosObjectArray[i].link, photosObjectArray[i].name);
    }
}

//Function for finding the name of the Photo automatically:

function fintTheName(PhotoName) {

}