/*
 * @author		Antonio Membrides Espinosa
 * @package    	Front
 * @date		23/10/2016
 * @copyright  	Copyright (c) 
 * @license    	GPL
 * @version    	1.0
 * */

class Main {
    constructor(){    }

    execute(controller, action, params){
        var ctrl = this.assist.get(controller, this.assist);
        if(ctrl["preAction"])  ctrl["preAction"].apply(ctrl, params);
        var out =  (ctrl[action]) ? ctrl[action].apply(ctrl, params) : "El controlador "+controller+" o la accion " + action + " no existen.";
        if(ctrl["posAction"])  ctrl["posAction"].apply(ctrl, params);
        return out;
    }

    respond(data){
        this.get("ksike/respond").end(data);
    }

    onDispatch(assist){
        this.assist = assist;
        try {
            var req = assist.get("ksike/router").resolve(assist.get("ksike/engine").request);
            assist.get("ksike/engine").request  = req;
            var out = this.execute(req.controller, req.action, [ req.param, assist] );
            assist.get("ksike/engine").response.data[req.pattern ? req.pattern : "default"] = out;
        }catch (error){
            assist.get("ksike/event").emit("onError", error);
            assist.get("ksike/engine").response.data[req.pattern ? req.pattern : "default"] = 'error';
        }
    }
}
exports.Main = Main;