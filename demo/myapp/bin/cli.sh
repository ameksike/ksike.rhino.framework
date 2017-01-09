#! /bin/bash
#
# @author		Antonio Membrides Espinosa
# @package    	bin
# @created		25/10/2016
# @updated		25/10/2016
# @copyright  	Copyright (c) 2015-2025
# @license    	GPL
# @version    	1.0
#

SCRIPT=$(readlink -f $0)
PATHL=`dirname $SCRIPT`

export KSRP=$PATHL/../
NODE=/home/me/bin/node-v6.9.4-linux-x64/bin/node
KSRS=$PATHL/cli.js

$NODE $KSRS $*