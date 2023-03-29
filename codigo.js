let arreglo;
const http = new XMLHttpRequest;
const url = 'https://randomuser.me/api/?format=JSON&nat=ES'
http.onreadystatechange = function () {
    if (this.readyState = 4 && this.status == 200) {

        arreglo = this.response;

        for(k in arreglo){
            if(k !=null && k == "results"){


                document.getElementById('foto').src =arreglo.results[0].picture.large
                document.getElementById('foto').width = "50";
                document.getElementById('foto').height = "250";


                document.getElementById('nombre').innerHTML += arreglo.results[0].name.last + " "+ arreglo.results[0].name.first;

                if(arreglo.results[0].gender == "male"){
                    document.getElementById('genero').innerHTML += " hombre";

                }   else{
                    document.getElementById('genero').innerHTML += " mujer" ; 
                }             
                
                document.getElementById('direccion').innerHTML += arreglo.results[0].location.state + ", " + arreglo.results[0].location.city + ", " + arreglo.results[0].location.street.name +" "+ arreglo.results[0].location.street.number; 


                document.getElementById('email').innerHTML += arreglo.results[0].email;

                document.getElementById('telefono').innerHTML += arreglo.results[0].phone;

                document.getElementById('celular').innerHTML +=  arreglo.results[0].cell;

                document.getElementById('edad').innerHTML +=  arreglo.results[0].dob.age;
                
            }
        }

    }
}
http.open("GET", url);
http.responseType = "json";
http.send();

