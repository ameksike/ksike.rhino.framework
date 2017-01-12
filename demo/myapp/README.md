Myapp es una aplicación demostrativa que permite explorar las potencialidades del framework Ksike en su serie Rhino, está compuesto por varios módulos en función de contenidos temáticos para facilitar el aprendizaje.

El modulo principal se denomina home, este proyecto además se integra directamente con el servidor de aplicaciones web Raikg, por tal motivo define en su configuración un archivo e tipo virtualhost raikg con el objetivo de publicarse por el protocolo HTTP, y ser administrado desde su propio binario principal ubicado en bin/cli.   

Instalación:
	1- git clone https://github.com/ameksike/ksike-rhino.git
	2- git clone https://github.com/ameksike/raikg-rhino.git
	3- Configurar las rutas de acceso a Ksike Framework y Raikg Server
		para esto se debe modificar en el fichero 'myapp/cfg/config.json' las siguientes variables:
			ksike.router.locate.pattern.ksike => especificar localización del framework Ksike, aunque por defecto lo debe encontrar.
			ksike.router.locate.pattern.raikg => especificar localización del servidor Raikge.
	4- Iniciar el servidor de aplicaciones web, véase el apartado de Administración de los servicios de Raikg.
	5- Acceder desde un navegador web a la url: http://localhost:3001/

Administración de los servicios de Raikg:
	Iniciar el servidor de aplicaciones web desde window:  bin/cli.bat  raikg:service:start    
	Iniciar el servidor de aplicaciones web desde GNU/Linux:  bin/cli.sh  raikg:service:start    
	Detener el servidor de aplicaciones web desde window:  bin/cli.bat  raikg:service:stop    
	Detener el servidor de aplicaciones web desde GNU/Linux:  bin/cli.sh  raikg:service:stop    
	Reiniciar el servidor de aplicaciones web desde window:  bin/cli.bat  raikg:service:restart
	Reiniciar el servidor de aplicaciones web desde GNU/Linux:  bin/cli.sh  raikg:service:restart Conocer el estado del servidor  de aplicaciones web desde window:  bin/cli.bat  raikg:service:status
	Conocer el estado del servidor de aplicaciones web desde GNU/Linux:  bin/cli.sh  raikg:service:status
