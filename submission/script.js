var text1 = document.getElementById("n1");
var text2 = document.getElementById("n2");
var text3 = document.getElementById("n3");
var text4 = document.getElementById("n4");
var data_hasil = "";
var harga = 0;

function add_number() {
   var first_number = parseFloat(text1.value);
   if (isNaN(first_number)) first_number = 0;
   var second_number = parseFloat(text2.value);
   if (isNaN(second_number)) second_number = 0;

var third_number = parseFloat(text3.value);
   if (isNaN(third_number)) third_number = 0;
   var fourth_number = parseFloat(text4.value);
   if (isNaN(fourth_number)) fourth_number = 0;

   var makan = first_number + second_number;
   var minum = third_number + fourth_number;
   harga = (first_number*10000) + (second_number*20000)+ (third_number*15000) + (fourth_number*12000);
   data_hasil = makan + " Makanan " + minum + " Minuman"
   document.getElementById("txtresult").innerText = "Makanan "+ makan + " Minuman "+ minum;
   document.getElementById("harga").innerText = "Rp. " + harga;
}

function simpanData() {

  var text = "Hai Customer, Terima kasih telah memesan ya, berikut review pesannannya: "+data_hasil+ "                             dengan harga: " + harga; 

  if (!liff.isInClient()) {
      sendAlertIfNotInClient();
  } else {
      liff.sendMessages([{
          'type': 'text',
          'text': text
      }]).then(function() {
          alert('Catatan Tersimpan');
      }).catch(function(error) {
          alert('Aduh kok error ya...');
      });
  }
  return false;
}
