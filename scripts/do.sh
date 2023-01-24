echo 
cd packages/$1/day$2
npx tsc
node index.js
rm *.js
echo 