/*
 * @author		Antonio Membrides Espinosa
 * @package    	bin
 * @created		10/10/2016
 * @updated		28/10/2016
 * @copyright  	Copyright (c)
 * @license    	GPL
 * @version    	1.0
 * */
//... se define el directorio del proyecto
var __path = __dirname + "/../";
//... se especifica la direccion del archivo de configuracion mediante la variable global process.env.KCFG
process.env.KCFG = require("path").resolve(__path + "cfg/config.json");
//... se especifica la direccion del proyecto mediante la variable global process.env.KSRP
process.env.KSRP = require("path").resolve(__path )  + require('path').sep;
//... se especifica la ubicacion del framework Ksike
var ksike_path = __path + "../../ksike";
ksike_path = require("path").resolve(ksike_path);
//... se enlaza este binario con el del ksike
require(ksike_path + "/bin/cli.js");