// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeGlyphs = document.querySelectorAll('.like-glyph')

likeGlyphs.forEach(likeGlyph => {
  likeGlyph.addEventListener('click', ()=>{
    mimicServerCall()
    .then(result => {
      if(likeGlyph.textContent == FULL_HEART){
        likeGlyph.textContent = EMPTY_HEART;
        likeGlyph.classList.remove('activated-heart')
      }else {
        likeGlyph.textContent = FULL_HEART
        likeGlyph.classList.add('activated-heart')
      }
    })
    .catch(error => {
      console.log("error message", error)
      const modal = document.getElementById('modal');
      modal.classList.remove('hidden')
      setTimeout(model => {
        modal.classList.add('hidden')
      }, 3000)
  
      modal.querySelector('#modal-message').textContent = error
  
      
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
