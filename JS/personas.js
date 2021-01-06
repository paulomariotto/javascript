
$(function () {

    function Persona(nombre, apellido, edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
    }
	const arregloPersonas = []
	
            
	$.ajax ({	 
		url: 'https://randomuser.me/api/?results=10',
		dataType: 'json',
		success: function (data) {
			
        personas = data.results
            
			personas.forEach(person => {
               
				$('#quiensomos').append(`
					<div>
						<img src="${person.picture.large}">
						<div>
							<p>Nombre: ${person.name.first} ${person.name.last}</p>
							<p>Email: ${person.email}</p>
						</div>
					</div>
				`)
			})

        }
    })   

       
   
})