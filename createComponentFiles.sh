#!/bin/bash

for d in src/client/modules/$1/*/; do\
    if [ $d != "app" ]; then
        echo "$d"
        cd $d
        echo 'import { LightningElement } from "lwc";\n\n' >> "$d".js
        echo '<template>\n\t\n</template>' >> "$d".html 
        cd ..
    fi
done