/*
 * @author		Antonio Membrides Espinosa
 * @package    	Builder
 * @created		28/10/2016
 * @updated		28/10/2016
 * @copyright  	Copyright (c) 2015-2015
 * @license    	GPL
 * @version    	1.0
 * */
class Main {
    template(req, assist) {
        var path = this.assist.get("ksike/router").path("ksike/module") + "tpl/";
        return require("fs").readdirSync(path);
    }

    new(req, assist){
        return this.build(req, assist);
    }
    build(req, assist) {
        var _this = this;
        var tplb = req["REQUEST"][1] ? req["REQUEST"][1] : "mod_std";
        var modn = req["REQUEST"][0] ? req["REQUEST"][0] : "home";
        var optp = this.assist.get("ksike/router").nsMin().resolve(modn);
        var name = optp ? ((!optp.name || optp.name == "") ? optp.pattern : optp.name ) : modn;
        var path = optp ? this.assist.get("ksike/router").normalize(optp.path) : this.assist.get("ksike/router").path();
        if(!path) return false;
        path += "lib" + require('path').sep;
        path += name + require('path').sep;
        var date = new Date();
        var opt = {
            "author": " ",
            "package": name,
            "name": name,
            "description": "",
            "date": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
            "copyright": "Copyright (c) 2015-2020",
            "license": "GPL v3.0",
            "version": "1.0",
            "dependencies": {},
            "main": "src/server/Main.js"
        };
        var pati = this.assist.get("ksike/router").path("ksike/module") + "tpl/" + tplb + "/";
        var mtd = pati + "index.json";
        var cfg = this.assist.get("ksike/config").get(mtd);

        function _write(opt, tpl, file) {
            require("twig").renderFile(tpl, opt, function (err, html) {
                require("fs").writeFileSync(file, html);
            });
        }

        try {
            require("fs").mkdirSync(path);
            if (cfg.build) {
                if (cfg.build.dir) {
                    for (var i in cfg.build.dir) {
                        require("fs").mkdirSync(path + cfg.build.dir[i]);
                    }
                }
                if (cfg.build.file) {
                    for (var i in cfg.build.file) {
                        _write(
                            opt,
                            pati + "tpl/" + cfg.build.file[i]['tpl'] + ".twig",
                            path + cfg.build.file[i]['out']
                        );
                    }
                }
            }
        } catch (error) {
            console.log(error);
            return "Error: no se puede crear el modulo: '" + req["REQUEST"][0] + "'";
        }
        return true;
    }

    delete(req, assist) {
        var name = req["REQUEST"][0] ? req["REQUEST"][0] : "demo";
        var path = this.assist.get("ksike/router").path(name);
        if(path){
            this.rmdir(path);
            return true;
        }
        return false;
    }
    remove(req, assist){
        return this.delete(req, assist);
    }
    del(req, assist){
        return this.delete(req, assist);
    }

    list(req, assist) {
        req["REQUEST"][0] = req["REQUEST"][0] ? req["REQUEST"][0] : "root";
        var path = this.assist.get("ksike/router").path(req["REQUEST"][0]);
        path = (req["REQUEST"][0] == "root" || req["REQUEST"][0] == "ksike") ? path  + "lib/" : path;
        return require("fs").readdirSync(path);
    }
    show(req, assist){
        return this.list(req, assist);
    }

    pack(req, assist) {
        var source = req['REQUEST'][0] ? req['REQUEST'][0] : "demo";
        source = this.assist.get("ksike/router").path(source);
        var destiny = req['REQUEST'][1] ? req['REQUEST'][1] : (this.assist.get("ksike/router").path("root") + "lib/" + req['REQUEST'][0] + ".zip");
        console.log(">> " + require("path").resolve(source));
        console.log("<< " + require("path").resolve(destiny));
        return assist.get("ksike/squeeze").zip(source, destiny);
    }

    unpack(req, assist) {
        return "... Falta por implementar";
    }

    rmdir(path) {
        try {
            if (require("fs").statSync(path).isDirectory()) {
                var tmp = require("fs").readdirSync(path);
                for (var i in tmp) {
                    var rsc = path + "/" + tmp[i];
                    if (require("fs").statSync(rsc).isDirectory()) {
                        this.rmdir(rsc);
                    } else {
                        require("fs").unlinkSync(rsc);
                    }
                }
                require("fs").rmdirSync(path);
            } else {
                require("fs").unlinkSync(path);
            }
        } catch (error) {
            console.log(error);
            return false;
        }
        return true;
    }
}
exports.Main = Main;