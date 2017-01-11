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
BIN=$PATHL/../re/nwjs/0.18.1/x86/linux/nw
SER=$PATHL/../cli.sh

$SER raikg:service:start galery 2>&1 & echo $!
$BIN --url="localhost:5151/demo/galery1" --no-toolbar 2>&1 & echo $!

