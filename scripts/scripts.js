document.addEventListener('DOMContentLoaded', function () {
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
})
