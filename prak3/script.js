//pure javascrpt
document.addEventListener("DOMContentLoaded", function(){
    //scope global
    const TUGAS_WEIGHT = 0.3;
    const UTS_WEIGHT = 0.3;
    const UAS_WEIGHT = 0.4;
    const PASSING_SCORE = 70;

    document.getElementById('calculateBtn').addEventListener('click', function(){
        //scope local
        let tugas = parseFloat(document.getElementById('tugas').value);
        let uts = parseFloat(document.getElementById('uts').value);
        let uas = parseFloat(document.getElementById('uas').value);
        let averageVal;
        let grade;
        let statusP;

        //validasi input
        if(isNaN(tugas) || tugas < 0 || tugas > 100 
        || isNaN(uts) || uts  < 0 || uts> 100 
        || isNaN(uas) || uas < 0 || uas > 100
    ){
        alert("Masukkan angka dari 0 - 100 !!! ");
        return;
    }

        //perhitungan
         averageVal = (tugas * TUGAS_WEIGHT) + (uts * UTS_WEIGHT) + (uas * UAS_WEIGHT);
         if (averageVal >= 90 ){
            grade = 'A';
         }else if (averageVal >= 80 ){
            grade = 'B';
         }else if(averageVal >= 70){
            grade = 'C';
         }else if(averageVal > 60){
            grade = 'D';
         }else{
            grade = 'E';
         }

        //menentukan kelulusan
        statusP = (grade == 'D' || grade == 'E') ? "TIDAK" : "LULUS";

        //tampilkan hasil
        document.getElementById('result').innerHTML = `
        <h4>Hasil Perhitungan: </h4>
        <p>Nilai Tugas (30%): ${tugas} </p>
        <p>Nilai UTS (30%): ${uts} </p>
        <p>Nilai UAS (40%): ${uas} </p>
        <p>Nilai Akhir: <b>${averageVal}</b></p>
        <p>Nilai Huruf: <b>${grade}</b></p>
        <p  id="status">status lulus: </p>
        `;

        // Menampilkan status setelah 3 detik
        setTimeout(function() {
            document.getElementById('status').innerHTML = `
            <p class="${statusP}" id="status">status lulus: ${statusP} </p>
            `
            ;}, 1500);

    })
})