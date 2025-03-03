document.addEventListener('DOMContentLoaded', function () {
  function toggleLabel() {
    // Скрытие лейбла внутри инпута при вводе текста
    const subscriptionInput = document.querySelector('#subscription-field')
    const label = document.querySelector('label[for="subscription-field"]')

    subscriptionInput.addEventListener('input', ({ target }) => {
      if (target.value.length >= 2) return
      if (target.value.length === 1) {
        label.classList.add('visually-hidden')
      }
      if (target.value.length === 0) {
        label.classList.remove('visually-hidden')
      }
    })
  }

  function toggleModal() {
    // Переключение модального окна
    const modalButton = document.querySelector('.search-button')
    const modalCloseButton = document.querySelector('.modal-close-button')
    const modalOverlay = document.querySelector('.modal-container')

    function openModal() {
      modalOverlay.classList.remove('modal-container-close')
    }

    function closeModal() {
      modalOverlay.classList.add('modal-container-close')
    }

    if (!modalButton || !modalCloseButton || !modalOverlay) return

    modalButton.addEventListener('click', openModal)
    modalCloseButton.addEventListener('click', closeModal)
    modalOverlay.addEventListener('click', ({ target }) => {
      if (!target.closest('.modal')) {
        closeModal()
      }
    })
    document.addEventListener('keydown', ({ key }) => {
      if (key === 'Escape') {
        closeModal()
      }
    })
  }

  toggleLabel()
  toggleModal()
})
