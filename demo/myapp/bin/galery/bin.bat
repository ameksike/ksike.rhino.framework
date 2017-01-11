@ECHO OFF
::
:: @author		Antonio Membrides Espinosa
:: @package    	bin
:: @created		25/10/2016
:: @updated		25/10/2016
:: @copyright  	Copyright (c) 2015-2015
:: @license    	GPL
:: @version    	1.0
::
@set PATHL=%~dp0
@set BIN=%PATHL%/../re/nwjs/0.18.1/x86/windows/nw.exe
@set SER=%PATHL%/../cli.bat

start "" /B %SER% raikg:service:start galery
start "" /B %BIN% --url="http://localhost:5151/demo/galery1" --no-toolbar