#!/bin/bash

## clone CHN Toool
git clone https://github.com/JensKrumsieck/CHN-Tool.git
cd CHN-Tool/CHN.Blazor

## publish in out
dotnet publish -c Release -o ../../out
cd ../../
## remove source folder
rm CHN-Tool -r -f

## copy .net to static
cp -avr out/CHN.Blazor/dist/_framework ../static

## remove out folder
rm out -r -f
