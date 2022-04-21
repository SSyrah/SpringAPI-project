const listButton = document.getElementById('studentbutton');

const aSyncFunction = async () => {
    console.log("Inside async");

    const response = await fetch(
        'http://localhost:8900/api/students'
    );
    console.log("response", response);

    const data = await response.json();
    console.log("Data", data);
}

listButton.addEventListener('click', () => {
    console.log("Pressed button");
    aSyncFunction();
});