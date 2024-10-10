export function deleteButtonOn (e) {
    const deleteButton = e.currentTarget.nextElementSibling
    if(!e.currentTarget.value) {
      deleteButton.classList.remove('is-active');
    } else {
      deleteButton.classList.add('is-active')
    }
  }

export function resetInput (e) {
    e.currentTarget.previousElementSibling.value = ""
  }