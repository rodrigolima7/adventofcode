echo 

# Check if parameters were provided.
if ! [[ $# -eq 2 ]]
then
  echo "Missing arguments. You must provide two arguments: year and day. Ex: yarn prep 2015 01."
  echo 
  exit 1
fi

# Check if year directory exists and create it if needed.
YEAR_DIR=packages/$1/
if [ -d "$YEAR_DIR" ]; then
  echo "$YEAR_DIR directory already exists."
else
  mkdir $YEAR_DIR
  echo "$YEAR_DIR directory created."
fi

# Check if day directory exists and create it if needed.
DAY_DIR=packages/$1/day$2/
if [ -d "$DAY_DIR" ]; then
  echo "$DAY_DIR directory already exists. Removing files if needed."
  rm -r $DAY_DIR
else
  mkdir $DAY_DIR
  echo "$DAY_DIR directory created."
fi

# Copy files.
echo "Applying template to $DAY_DIR directory."
cp -a scripts/template/. $DAY_DIR

echo 