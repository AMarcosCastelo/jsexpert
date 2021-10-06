# a partir da pasta raiz do nosso projeto

find . -name *.test.js
find . -name '*.test.js' -not -path '*node_modules**'
find . -name '*.js' -not -path '*node_modules**'

npm i -g ipt
find . -name '*.js' -not -path '*node_modules**' | ipt

# volta para a pasta no modulo05
cp -r '../../modulo1/aula05-tdd-desafio-resolvido' .

CONTENT="'use strinct';"
find . -name '*.js' -not -path '*node_modules**' | xargs -I '{file}' sed -i "" -e '1s/^/\"use strict";\n/g' {file}

# 1s -> primeira linha
# ^-> primeira coluna
# substitui pelo $CONTENT
# quebrou a linha para adicionar um \n implicito

