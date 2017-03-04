function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length){
    alert('Fields may not be left blank.');
    return false;
  }

if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number'){
  alert('Age must be a number.');
  return false;
}

}
