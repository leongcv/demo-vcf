import vCardsJS from 'vcards-js';
 
//create a new vCard
var vCard = vCardsJS();
 
//set properties
vCard.firstName = 'Eric';
vCard.middleName = 'J';
vCard.lastName = 'Nesser';
vCard.organization = 'ACME Corporation';
vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vCard.workPhone = '312-555-1212';
vCard.birthday = new Date(1985, 0, 1);
vCard.title = 'Software Developer';
vCard.url = 'https://github.com/enesser';
vCard.note = 'Notes on Eric';
 
//save to file
// vCard.saveToFile('./eric-nesser.vcf');
 
//get as formatted string
console.log(vCard.getFormattedString());

const filename = 'test-contact.vcf';

const downloadLink = document.createElement('a');
downloadLink.setAttribute('href', 'data:text/vcard;charset=utf-8,' + vCard.getFormattedString());
downloadLink.setAttribute('download', filename);
downloadLink.innerHTML = filename;
document.body.appendChild(downloadLink);
