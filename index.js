window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60b2d3']

    // Lets got going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', (e) => {
            sounds[index].currentTime = 0;
            sounds[index].play()
            createBubbles(index, e.clientX)
        })
    })


    //Create a fundtion that makes bubles

    const createBubbles = (index, left) => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.left = (left - 20) + "px"
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this)
        })
    }

})

