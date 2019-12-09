const array = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];

function superbowlWin(record) {
  const found = record.find(obj =>  obj.result === "W");
  return found ? found.year : undefined;
}

superbowlWin(array)
