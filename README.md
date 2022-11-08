# Introduction

Simple wrapper of indian railway api for personal project

# Getting Started with Indian-Rail

## Installing Indian-Rail

```bash
$ npm install indian-rail-api
```

# Using Indian-Rail

## GetTrainInformation

```javascript
const rail = require("indian-rail-api");

rail.getTrainInformation(trainNo, callback(response);

//example
rail.getTrainInformation(19034, (r) => {
    const json = JSON.parse(r);
    console.log(json);
});
```

## Get TrainBetweenStations

```javascript
const rail = require("indian-rail-api");

rail.getTrainBtwStation(from , to , callback(response);

//example
rail.getTrainBtwStation("ST", "ANND" ,(r) => {
    const json = JSON.parse(r);
    console.log(json);
});
```

Note That `getTrainBtwStation` takes only station codes as a parameter

The following resource may be helpful:
[List of all stations](https://gist.github.com/shubhamjain/35ed77154f577295707a)

## Get TrainOnDate

```javascript
const rail = require("indian-rail-api");

rail.getTrainOnDate(from , to , date ,callback(response);

//example
rail.getTrainOnDate("ST", "ANND" , 7-11-2022 ,(r) => {
    const json = JSON.parse(r);
    console.log(json);
});
```

Note That `getTrainOnDate` takes date parameter only in `DD-MM-YYYY` format

## Get TrainOnDate

```javascript
const rail = require("indian-rail-api");

rail.getRoute(trainNo, callback(response);

//example
rail.getRoute(19034, (r) => {
    const json = JSON.parse(r);
    console.log(json);
});
```
