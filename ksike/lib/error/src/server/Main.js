/*
 * @author		Antonio Membrides Espinosa
 * @package    	Error
 * @created		26/10/2016
 * @updated		28/12/2016
 * @copyright  	Copyright (c) 2015-2015
 * @license    	GPL
 * @version    	1.0
 * */
class Error {
    onError(error) {
        console.log(error.name); // logs 'Error'
        console.log(error.message); // logs 'The message' o un error de JavaScript)

    }
}
exports.Main = Error;