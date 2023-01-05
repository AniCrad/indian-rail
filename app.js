import rp from "request-promise";

const getTrainInformation = (trainNo, callback) => {
  rp(
    `https://indian-railway-api.cyclic.app/trains/getTrain/?trainNo=${trainNo}`
  )
    .then((resp) => {
      callback(resp);
    })
    .catch((err) => {
      callback(err);
    });
};

const getTrainBtwStation = (from, to, callback) => {
  rp(
    `https://indian-railway-api.cyclic.app/trains/betweenStations/?from=${from}&to=${to}`
  )
    .then((resp) => {
      callback(resp);
    })
    .catch((err) => {
      callback(err);
    });
};

const getTrainOnDate = (from, to, date, callback) => {
  rp(
    `https://indian-railway-api.cyclic.app/trains/gettrainon?from=${from}&to=${to}&date=${date}`
  )
    .then((resp) => {
      callback(resp);
    })
    .catch((err) => {
      callback(err);
    });
};

const getRoute = (trainNo, callback) => {
  rp(`https://indian-railway-api.cyclic.app/trains/getRoute?trainNo=${trainNo}`)
    .then((resp) => {
      callback(resp);
    })
    .catch((err) => {
      callback(err);
    });
};

export default {
  getTrainInformation,
  getTrainBtwStation,
  getTrainOnDate,
  getRoute,
};
