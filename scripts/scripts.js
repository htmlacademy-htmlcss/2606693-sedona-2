document.addEventListener('DOMContentLoaded', function () {
  function toggleLabel() {
    // Скрытие лейбла внутри инпута при фокусе на поле ввода
    const subscriptionInput = document.querySelector('#subscription-field')
    const label = document.querySelector('label[for="subscription-field"]')

    function hideLabel() {
      label.classList.add('visually-hidden')
    }

    function showLabel() {
      label.classList.remove('visually-hidden')
    }

    subscriptionInput.addEventListener('focusin', hideLabel)
    subscriptionInput.addEventListener('focusout', () => {
      if (subscriptionInput.value.length > 0) return
      showLabel()
    })
  }

  function toggleModal() {
    // Переключение модального окна
    const modalButton = document.querySelector('.search-button')
    const modalCloseButton = document.querySelector('.modal-close-button')
    const modalOverlay = document.querySelector('.modal-container')

    if (!modalButton || !modalCloseButton || !modalOverlay) return

    function openModal() {
      modalOverlay.classList.remove('modal-container-close')
      document.body.style.overflow = 'hidden'
    }

    function closeModal() {
      modalOverlay.classList.add('modal-container-close')
      document.body.style.overflow = ''
    }

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
