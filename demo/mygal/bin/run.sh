#! /bin/bash
#
# @author		Antonio Membrides Espinosa
# @package    	bin
# @date		    25/10/2016
# @copyright  	Copyright (c) 2015-2015
# @license    	GPL
# @version    	1.0
#

SCRIPT=$(readlink -f $0)
PATHL=`dirname $SCRIPT`
:: path to Node Web Kit
BIN=/home/me/bin/nwjs/nw
:: path to Ksike front CLI
SER=$PATHL/cli.sh
:: initialize Raikg Server which virtualhost for app
$SER raikg:service:start default 2>&1 & echo $!
:: run app under Node Web Kit
$BIN --url="localhost:3002" --no-toolbar 2>&1 & echo $!

