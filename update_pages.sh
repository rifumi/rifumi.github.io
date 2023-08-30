#!/bin/bash

if [ ! -d ./docs ];then
  mkdir docs
fi

cp -r app docs/
cp -r js docs/
cp -f index.html docs/

