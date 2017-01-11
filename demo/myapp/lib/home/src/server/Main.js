/*
 * @author		Antonio Membrides Espinosa
 * @package    	demo
 * @created		09/01/2017
 * @updated		09/01/2017
 * @copyright  	Copyright (c) 2015-2020
 * @license    	GPL v3.0
 * @version    	1.0
 * */
class Main
{
    /*
     * name: index
     * description: ejemplo de definición de un función o acción para este modulo
     * */
    index(req, assist){
        /*
        * El parámetro denominado req contiene los valores especificados como parámetros
        * de la petición según el método de envío el cual se utiliza como índice de búsqueda.
        *
        * El parametro denominado assist constituye un recurso importante del framework
        * que abstrae a los desarrolladores del acceso a otros modulos.
        *
        * El valor de retorno de la función o acción de este módulo será mostrado en 
        * pantalla como salida.
        * */
        return "HOLA_MUNDO";
    }
    /*
     * name: preAction
     * description: método opcional que se ejecuta antes de cualquier función de este modulo
     * */
    preAction(req, assist) {
        //... do it ...
    }
    /*
     * name: posAction
     * description: método opcional que se ejecuta despues de cualquier función de este modulo
     * */
    posAction(req, assist) {
        //... do it ...
    }
    /*
    * name: req
    * description: ejemplo de como maipular las peticiones WEB y/o CLI
    * */
    req(req, assist){
        //... posibles índices a utilizar a través del parámetro req: GET, POST, PUT, DELETE, CLI, URL, REQUEST
        //... los índices GET, POST, PUT, DELETE están presentes solo si se acceden mediante el protocolo HTTP
        console.log(req['GET']);
        console.log(req['POST']);
        console.log(req['PUT']);
        console.log(req['DELETE']);
        //... el índice denominado CLI solo está presente en caso de invocarse la acción desde una interfaz de comandos de consola
        console.log(req['CLI']);
        //... el índice denominado URL corresponde el mecanismo de extracción de parámetros de una url ejemplo: /controlador/accion/parametro_1/parametro_n
        console.log(req['URL']);
        //... el índice denominado REQUEST concentro la información contenida en el resto de los índices
        console.log(req['REQUEST']);
        return req;
    }
    /*
     * name: form
     * description: ejemplo de utilización de formularios
     * */
    form(req) {
        //... en este ejemplo se renderiza el contenido html del archivo form de forma manual
        return require('fs').readFileSync(__dirname + "/../client/html/form.html");
    }
    /*
     * name: configGet
     * description: ejemplo de como obtener archivos de configuración
     * */
    configGet(req, assist){
        //... obteniendo la configuracion global
        var global = assist.get('ksike/config').get();
        //... obteniendo la configuracion global
        var root = assist.get('ksike/config').get('root');
        //... obteniendo la configuracion local al modulo home
        var local = assist.get('ksike/config').get('home');
        return local;
    }
    /*
     * name: configSet
     * description: ejemplo de como almacenar archivos de configuración
     * */
    configSet(req, assist){
        //... momodificando el archivo de configuracion del modulo Home
        assist.get('ksike/config').get('home').name = 'tst';
        assist.get('ksike/config').get('home').age = 12;
        assist.get('ksike/config').get('home').owner = { name: 'owner-01' };
        //... salvando el archivo de configuracion del modulo Home
        assist.get('ksike/config').save();
        /*
        * en este caso el módulo ksike/config asume en el método save
        * que debe almacenar los datos del último archivo de configuración
        * cargado en memoria. No obstante el método save recibe 3 parámetros
        *     ksike/config::save(path=false, index="config", data=false)
        *        path: indica el directorio donde sera almacenado el archivo de configuración
        *        index: indica el nombre del archivo de configuración
        *        data: la información que se desea almacenar
        * */
        return true;
    }
    /*
     * name: route
     * description: ejemplos del empleo del sistema de enrutamiento de Ksike
    * */
    route(req, assist){
        //... obtener la localización global del proyecto, también se puede especificar el identificador root
        var global = assist.get('ksike/router').path();
        console.log(global);
        //... obtener la localización del framework Ksike
        var ksike = assist.get('ksike/router').path('ksike');
        console.log(ksike);
        //... obtener la localización del modulo config dentro del espacio de nombre ksike
        var config = assist.get('ksike/router').path('ksike/config');
        console.log(config);
        //... obtener la localización del modulo home
        var local = assist.get('ksike/router').path('home');
        console.log(local);
        return local;
    }
    /*
     * name: loading
     * description: ejemplos del empleo del sistema de carga e instanciación de Ksike, este mecanismo implementa los patrones IoC, DI, SL, Singleton
     * */
    loading(req, assist){
        //... obteniendo una instancia global del módulo router ubicado en el espacio de nombres ksike
        var router = assist.get('ksike/router');
        console.log(router);
        //... obteniendo una instancia global del modulo home
        var home = assist.get('home');
        console.log(home);
    }
}
exports.Main = Main;