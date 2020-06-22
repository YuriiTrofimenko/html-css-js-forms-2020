// Быстрый доступ к форме по значению ее атрибута name
const form = document.forms.character
console.log(form)
// Быстрый доступ к форме по ее индексу
const form0 = document.forms[0]
console.log(form0)
// Установка обработчика отправки формы
form.onsubmit = (e) => {
  // Предотвращение перезагрузки страницы
  e.preventDefault()
  // Поиск всех текстовых элементов ввода в форме
  document.querySelectorAll('form > input[type=text]').forEach(input => {
    /* // Если поле не заполнено
    if (!input.value) {
      // - его рамка становится красной,
      input.style.borderColor = 'red'
    } else {
      // иначе - принимает вид по умолчанию
      input.style.borderColor = ''
    } */
  })
  // Сбор данных из всех элементов ввода
  const data = new FormData(form)
  // Вывод в консоль всех пар "имя_параметра"-"значение_параметра" из формы
  data.forEach((value, key, formData) => console.log(key, value))
  // Доступ к элементам формы по их именам
  console.log(form.elements.gender)
  console.log(form.elements['skills[]'])
  form.elements.gender.forEach((value, index, array) => console.log(index, value.checked))
  Array.from(form.elements.citySelect.options)
    .filter(option => option.selected)
    .map(option => option.value)
    .forEach((value, index, array) => console.log(value))
}
