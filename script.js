var arr = [
    {dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",story: "https://plus.unsplash.com/premium_photo-1669950093661-be9dedbda440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1574297500578-afae55026ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1725654020255-6d98526b01c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1724488103883-c00104fcf68c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3"},
    {dp:"https://images.unsplash.com/photo-1724612412125-1531f23fa0e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D" ,story:"https://images.unsplash.com/photo-1723442246044-7ccd50c84386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2OHxfOHpGSHVoUmh5b3x8ZW58MHx8fHx8"},
    
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function(elem, idx) {
    clutter += `
        <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="" >
        </div>
    `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    var fullScreen = document.querySelector("#full-screen");
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function() {
        fullScreen.style.display = "none";
    }, 3000);
});