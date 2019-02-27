var stream=require('fs');
function write() {
    stream.writeFile("archivo.txt", generate(), err => {
        if (err) console.log(err);
        else console.log("Escritura Exitosa");
    });
}
function read() {
    stream.readFile('archivo.txt', 'utf-8', (err, data) => {
        if (err) console.log(err);
        else {
            let lines = data.split("\r\n");
            lines.forEach(function (data) {
                let row = data.split(",");
                console.log("No. Consecutivo: " + row[0]);
                console.log("#Control: " + row[1]);
                console.log("Nombre: " + row[2]);
                console.log("Calificacion: " + row[3]);
                console.log("------------------------");
            });
        }
    });
}

function generate(){
    const control=["15400981","15400982","15400983","15400984","15400985","15400986","15400987","15400988","15400989","15400990"];
    const names=["Sergio Alfaro","Delia Macias","Ricardo Jimenez","Brian Larreta","Gabriela De La Rosa","Manuel Del Hoyo","Miguel Duran","Edgar Pozas","Aldair Arriola","Eric Garcia"];
    const grades=[70,80,90,100,100,100,85,98,99,100];
    let cad="";
    for (let i=0;i<10;i++){
        if (i==9) cad+=(i+1)+","+control[i]+","+names[i]+","+grades[i];
        else cad+=(i+1)+","+control[i]+","+names[i]+","+grades[i]+"\r\n";
    }
    return cad;
}

//write();
read();