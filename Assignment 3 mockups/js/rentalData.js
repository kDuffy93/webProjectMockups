// toggle button
$(".toggle").on("click", function() {
  $(".toggle").toggleClass("checked");
  if(!$('input[name="check"]').prop("checked")) {
    $(".toggle input").prop("checked", true);
  } else {
    $(".toggle input").prop("checked", false);
  }
});

// modal window
$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});

// range
const inputElem = document.getElementById('rangeBedrooms');
const currentValueElem = document.getElementById('current-value');

const setCurrentValue = (val) => {
  currentValueElem.innerText = val;
}

const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

window.onload = () => {
  inputElem.addEventListener('input', rangeOnChange);
  setCurrentValue(inputElem.value);
}