logoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () => {
      logoImg.src = reader.result;
    }
    reader.readAsDataURL(file);
  }
});
// Change logo image dynamically
const logoPlaceholder = document.getElementById('logo-placeholder');
const logoImg = document.getElementById('logo-img');

logoPlaceholder.addEventListener('click', () => {
  const newLogo = prompt("Enter the URL of your logo or profile image:");
  if(newLogo){
    logoImg.src = newLogo;
  }
});
const topLogoUpload = document.getElementById('top-logo-upload');
const topLogoImg = document.getElementById('top-logo-img');

topLogoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () => {
      topLogoImg.src = reader.result; // Set local image as logo
    }
    reader.readAsDataURL(file);
  }
});
const topLogoUpload = document.getElementById('top-logo-upload');
const topLogoImg = document.getElementById('top-logo-img');

topLogoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];  // Local file select
  if(file){
    const reader = new FileReader();   // FileReader se read karenge
    reader.onload = () => {
      topLogoImg.src = reader.result;  // Image update
    }
    reader.readAsDataURL(file);       // Local image ko base64 me convert
  }
});
