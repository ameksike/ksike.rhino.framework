@ECHO OFF
::
:: @author		Antonio Membrides Espinosa
:: @package    	bin
:: @created		25/10/2016
:: @updated		25/10/2016
:: @copyright  	Copyright (c) 2015-2025
:: @license    	GPL
:: @version    	1.0
::

@set PATHL=%~dp0
@set KSRP=%PATHL../
@set NODE=node
@set KSRS=%PATHL%cli.js
%NODE% %KSRS% %*

:: ejemplo de como modificar los node path @set NODE_PATH=%PATHL%../lib/nodejs/