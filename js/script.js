document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById('answerBox');
  let buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      let buttonText = e.target.textContent;

      switch (buttonText) {
        case '=':
          calculate();
          break;
        case 'AC':
          clearInput();
          break;
        case 'DEL':
          deleteLast();
          break;
        default:
          appendToInput(buttonText);
          break;
      }
    });
  });

  function appendToInput(value) {
    input.value += value;
  }

  function clearInput() {
    input.value = '';
  }

  function deleteLast() {
    input.value = input.value.slice(0, -1);
  }

  function calculate() {
    try {
      input.value = eval(input.value);
    } catch (error) {
      input.value = 'Error';
    }
  }
});
