const form = document.forms.character
form.onsubmit = (e) => {
  e.preventDefault()
  document.querySelectorAll('form > input[type=text]').forEach(input => {
    if (!input.value) {
      input.style.borderColor = 'red'
    } else {
      input.style.borderColor = ''
    }
  })
  const data = new FormData(form)
  data.forEach((value, key, formData) => console.log(key, value))
}
