// bodymovin setup
const squiggleSetup = {
  container: document.getElementById('squiggle'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'scripts/squiggle.json',
  name: 'squiggle'
 
}
const anim = bodymovin.loadAnimation(squiggleSetup)


// first we make a setup to detect whether the stuff
// is inside the viewport
const interactionArea = document.querySelector('section.interaction')
const titleTags = document.querySelectorAll('section.interaction h2 span')
const imgTag = document.querySelector('section.interaction img')


const animateStuff = () => {
  const timing = 200
  // get the top of the area
  const tagTop = interactionArea.getBoundingClientRect().top
  
	if (tagTop < window.innerHeight - 400) {
    titleTags.forEach((title, index) => {
      setTimeout(function() {
      	 title.classList.add('active')
      }, timing * index)
    })
    	setTimeout(function() {
      	imgTag.classList.add('active')
        bodymovin.play('squiggle')
      }, 800)
	}

}
// run it on load incase its already in the viewport
animateStuff()
// run it on scroll event
document.addEventListener('scroll', animateStuff)
