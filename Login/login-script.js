
function changeLevel() {
  document.querySelectorAll('.level-select').forEach(div => div.style.display = 'none');
  const value = document.getElementById('grade').value;
  if (value === 'primary') {
    document.getElementById('primary-level').style.display = 'block';
  } else if (value === 'middle') {
    document.getElementById('middle-level').style.display = 'block';
  } else if (value === 'high') {
    document.getElementById('high-level').style.display = 'block';
  }

}

function updateSecondSelect() {
  const selectedValue = document.getElementById("priority1").value;
  const secondSelect = document.getElementById("priority2");
  const options = secondSelect.options;

  for (let i = 0; i < options.length; i++) {
    const opt = options[i];

    if (opt.value === "" || opt.value !== selectedValue) {
      opt.hidden = false;
    } else {
      opt.hidden = true;
    }

    if (opt.hidden && secondSelect.value === opt.value) {
      secondSelect.value = "";
    }
  }
}