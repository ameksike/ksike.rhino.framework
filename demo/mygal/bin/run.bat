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
:: path to Node Web Kit
@set BIN=D:\users\tony\proj\kr_sdk\bin\re\nwjs\0.18.1\x86\windows\nw.exe
:: path to Ksike front CLI
@set SER=%PATHL%/../cli.bat
:: initialize Raikg Server which virtualhost for app
start "" /B %SER% raikg:service:start default
:: run app under Node Web Kit
start "" /B %BIN% --url="http://localhost:3002" --no-toolbar