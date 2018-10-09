function cargar_clima() {
   // $('button').bind('click', function () {
        var clima = new XMLHttpRequest();
        //var ciudad='Santiago';
        var ciudad = $('#comunas').val();
        clima.open('GET', 'http://api.wunderground.com/api/e069d13c9432ad2f/conditions/q/CL/' + ciudad + '.json', false);
        clima.send(null);

        var datos = JSON.parse(clima.response);

        var ciudad = datos.current_observation.display_location.full;
        var temperatura = datos.current_observation.temp_c;
        var humedad = datos.current_observation.relative_humidity;
        var icon = datos.current_observation.icon_url;
        var clima = datos.current_observation.weather;

        $('#ubicacion').html(ciudad);
        $('#temperatura').html(temperatura);
        $('#humedad').html(humedad);
        $('#icon').attr("src", icon);  //En este caso, por tratarse de una imagen, se manipula el atributo src del elemento

        var bgcolor = '#FFF';

        switch (clima) {
            case 'Fog':
                bgcolor = '#F7F4EA';
                break
            case 'Clear':
                bgcolor = '#BFD7EA';
                break
        }

        $('#container').css('background-color', bgcolor);
   // });
}

$(document).ready(function () {
    cargar_clima();
    setInterval(cargar_clima, 3600000); //actualiza el tiempo cada 1 hora.
});
//-------------------------------------
var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapaca",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camina", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "Maria Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiapo", "Caldera", "Tierra Amarilla", "Chanaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuna", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbala", "Monte Patria", "Punitaqui", "Rio Hurtado"]
	},
		{
			"NombreRegion": "Valparaiso",
			"comunas": ["Valparaiso", "Casablanca", "Concon", "Juan Fernandez", "Puchuncavi", "Quintero", "Vina del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Maria", "Quilpue", "Limache", "Olmue", "Villa Alemana"]
	},
		{
			"NombreRegion": "Region del Libertador Gral. Bernardo O’Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Donihue", "Graneros", "Las Cabras", "Machali", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requinoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chepica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Region del Maule",
			"comunas": ["Talca", "ConsVtucion", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Rio Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curico", "Hualane", "Licanten", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquen", "Linares", "Colbun", "Longavi", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Region del Biobio",
			"comunas": ["Concepcion", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tome", "Hualpen", "Lebu", "Arauco", "Canete", "Contulmo", "Curanilahue", "Los alamos", "Tirua", "Los angeles", "Antuco", "Cabrero", "Laja", "Mulchen", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Barbara", "Tucapel", "Yumbel", "Alto Biobio", "Chillan", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillan Viejo", "El Carmen", "Ninhue", "niquen", "Pemuco", "Pinto", "Portezuelo", "Quillon", "Quirihue", "Ranquil", "San Carlos", "San Fabian", "San Ignacio", "San Nicolas", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Region de la Araucania",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquen", "Pucon", "Saavedra", "Teodoro Schmidt", "Tolten", "Vilcun", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautin", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Puren", "Renaico", "Traiguen", "Victoria", ]
	},
		{
			"NombreRegion": "Region de Los Rios",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Mafil", "Mariquina", "Paillaco", "Panguipulli", "La Union", "Futrono", "Lago Ranco", "Rio Bueno"]
	},
		{
			"NombreRegion": "Region de Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cochamo", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullin", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Velez", "Dalcahue", "Puqueldon", "Queilen", "Quellon", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Rio Negro", "San Juan de la Costa", "San Pablo", "Chaiten", "Futaleufu", "Hualaihue", "Palena"]
	},
		{
			"NombreRegion": "Region Aisen del Gral. Carlos Ibanez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Aisen", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Rio Ibanez"]
	},
		{
			"NombreRegion": "Region de Magallanes y de la AntarVca Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "Rio Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntarVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Region Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchali", "El Bosque", "Estacion Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipu", "nunoa", "Pedro Aguirre Cerda", "Penalolen", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquin", "San Miguel", "San Ramon", "Vitacura", "Puente Alto", "Pirque", "San Jose de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhue", "Curacavi", "Maria Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Penaflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione region</option><option value="sin-region">--</option>';
	var htmlComunas = '<option value="sin-region">Seleccione ciudad</option><option value="sin-region">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Region');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		} else {cargar_clima();}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Region');
		}
	});

});