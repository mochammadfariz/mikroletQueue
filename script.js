var penumpang = ['Sandhika', undefined, 'Doddy'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } //else 
    else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang dikursi tsb
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada didalam mikrolet')
                // kembalikan isi array dan keluar dari function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                //     tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array dan keluar dari function
                return penumpang;
                // }
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    //3 rules:
    //jika angkot kosong, tampilkan pesan bahwa angkot kosong
    //jika ada penumpang yg namanya sesuai,hapus nama penumpang pada array dengan memberi nilai undefined
    // jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahan

    //cek kondisi 1 : jika angkot kosong, tampilkan pesan bahwa angkot kosong
    if (penumpang.length == 0) {
        console.log("Mikrolet masih kosong.")
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + " tidak ada didalam angkot");
                return penumpang;
            }
        }
    }
}