'use strict';

// All Input button selected
const allButton = document.querySelectorAll('#calculator button');

// input Display selected
const diplay = document.getElementById('displayValue');

// ForEach button target click event is created
allButton.forEach((p) => {
  p.addEventListener('click', (e) => {
    const target = e.currentTarget.textContent;
    let value = diplay.value;
    // Error handel of octael number and dividing with zero
    if (value[0] === '0') {
      if (value.includes('0/')) {
        alert('0 cannot get divided by any number.');
        return (diplay.value = '');
      }
      value = value.replace('0', '');
    }

    // Target having function
    if (target == '=') {
      diplay.value = eval(value);
    } else if (target === 'C') {
      diplay.value = '';
    } else {
      diplay.value += target;
      //   console.log(diplay.value);
    }
  });
});
