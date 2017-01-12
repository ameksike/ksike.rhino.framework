/*
 * @author		Antonio Membrides Espinosa
 * @package    	Ksike Rhino View
 * @created		26/10/2016
 * @updated		28/12/2016
 * @copyright  	Copyright (c)
 * @license    	GPL
 * @version    	1.0
 * */
class Main
{
    constructor(opt=false){
        this.response = false;
        this.configure(opt);
    }

    configure(opt=false){
        this.response = opt.response ? opt.response : this.response;
    }

    onConfigure(assist){
        this.configure(assist.rsc);
    }

    get(_path){
        return require('fs').readFileSync(_path);
    }

    render(_name="index", _path="", _type="html", _param={}){
        var tpl = _path + "src/client/"+ (_type=="html" ? "html" : "tpl") +"/"+_name+"."+_type;
        if(_type=="html"){
            var _tmp = ``;
            var _tpl = this.get(tpl).toString();
            this.setvar(_param);
            eval('_tmp = `'+_tpl+'`; ' );
            this.delvar(_param);
            return _tmp;
        }
        else{
            var _this = this;
            if(!require('fs').existsSync(tpl)) return false;
            try {
                require("twig").renderFile(tpl, _param, function (err, html) {
                    _this.response.end(html);
                });
            }
            catch (error) {
                assist.get("ksike/event").emit("onError", error);
            }
        }
    }

    setvar(src){
        for(var i in src){
            global[i] = src[i];
        }
    }

    delvar(src){
        for(var i in src)
           delete global[i];
    }
    
}
exports.Main = Main;