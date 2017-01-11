/*
 * @author		Antonio Membrides Espinosa
 * @package    	galery
 * @created		11/0/2017
 * @updated		11/0/2017
 * @copyright  	Copyright (c) 2015-2020
 * @license    	GPL v3.0
 * @version    	1.0
 * */
class Main
{
    constructor() {
        this.path = __dirname + "/../../";
    }

    index(req, assist){
        return assist.get("ksike/view").render("galery1", this.path);
    }

    expl1(req, assist){
        return assist.get("ksike/view").render("galery1", this.path);
    }

    expl2(req, assist){
        return assist.get("ksike/view").render("galery2", this.path);
    }
}
exports.Main = Main;