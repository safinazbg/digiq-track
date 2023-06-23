// File#: _1_flash-message
// Usage: codyhouse.co/license
class FlashMessage {
  constructor(element) {
    this.element = element
    this.showClass = "flash-message--is-visible"
    this.messageDuration = parseInt(this.element.getAttribute('data-duration')) || 3000
    this.triggers = document.querySelectorAll('[aria-controls="'+this.element.getAttribute('id')+'"]')
    this.timeoutId = null
    this.isVisible = false
    this.initFlashMessage()
  }

  initFlashMessage() {
    //open modal when clicking on trigger buttons
    const self = this
    if ( this.triggers ) {
      for(let i = 0; i < this.triggers.length; i++) {
        this.triggers[i].addEventListener('click', function(event) {
          event.preventDefault()
          self.showFlashMessage()
        })
      }
    }
    //listen to the event that triggers the opening of a flash message
    this.element.addEventListener('showFlashMessage', function(){
      this.showFlashMessage()
    })

  }

  showFlashMessage() {
    const self = this
    this.element.classList.add(this.showClass)
    this.isVisible = true
    //hide other flash messages
    this.hideOtherFlashMessages()
    if( this.messageDuration > 0 ) {
      //hide the message after an interveal (this.messageDuration)
      this.timeoutId = setTimeout(function(){
        self.hideFlashMessage()
      }, this.messageDuration)
    }
  }

  hideFlashMessage() {
    this.element.classList.remove(this.showClass)
    this.isVisible = false
    //reset timeout
    clearTimeout(this.timeoutId)
    this.timeoutId = null
  }

  hideOtherFlashMessages() {
    const event = new CustomEvent('flashMessageShown', { detail: this.element })
    window.dispatchEvent(event)
  }

  checkFlashMessage(message) {
    if( !this.isVisible ) return
    if( this.element == message) return
    this.hideFlashMessage()
  }
}

export const useFlashMessages = () => {
  //initialize the FlashMessage objects
  const flashMessages = document.getElementsByClassName('js-flash-message')
  if( flashMessages.length > 0 ) {
    const flashMessagesArray = []
    for( let i = 0; i < flashMessages.length; i++) {
      (function(i){
        flashMessagesArray.push(new FlashMessage(flashMessages[i]));
      })(i)
    }

    //listen for a flash message to be shown -> close the others
    window.addEventListener('flashMessageShown', function(event){
      flashMessagesArray.forEach(function(element){
        element.checkFlashMessage(event.detail)
      })
    })
  }
}
