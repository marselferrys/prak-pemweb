/* 
Nama: Marchel Ferry Timoteus Samosir
NIM: 121140195
Prodi: Teknik Informatika
Kelas: Rc
*/

function hitungganjilgenap(){
  
  const Inputbilangan = parseInt(document.getElementById('inputBilangan').value);
  let ganjil = 0;
  let genap = 0;
  
if( Inputbilangan > 0 && !isNaN(Inputbilangan)){
  for(let i = 1; i <= Inputbilangan; i++){
    if(i%2 == 0){
        genap++;
    }else{
        ganjil++;
    }
}

let hasilPerhitungan =  document.getElementById('hasilPerhitungan');
    hasilPerhitungan.innerHTML = 'Jumlah bilangan ganjil: '+ ganjil + '<br>' + 
                                'Jumlah bilangan genap: ' + genap;
  }else{
    alert("Masukkan tidak valid. Mohon masukkan bilangan bulat positif atau bilangan bukan 0.");
}
}
