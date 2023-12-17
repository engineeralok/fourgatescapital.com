var cursor = document.getElementById('cursor');
cursor.style.display = 'none';
var lastX = 0;
var lastY = 0;
var isFirstMove = true;

function updateCursorPosition(e) {
    cursor.style.display = 'block';
    lastX = e.clientX - cursor.offsetWidth / 2;
    lastY = e.clientY - cursor.offsetHeight / 2;

    // Show the cursor when there's mouse movement
    // cursor.style.display = isFirstMove ? 'block' : 'none';

    gsap.to(cursor, { duration: 1, x: lastX, y: lastY, ease: "power2.out" });

    // Set a timer to hide the cursor after the first movement (200ms delay)
    if (isFirstMove) {
        isFirstMove = false;;
    }
}

document.addEventListener('mousemove', updateCursorPosition);

document.addEventListener('scroll', function () {
    cursor.style.display = 'block';
    gsap.to(cursor, { duration: 0.2, x: lastX, y: lastY, ease: "power2.out" });
});