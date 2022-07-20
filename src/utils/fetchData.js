export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "1512ad749dmsh8f84b933e3d1646p17a7ddjsnd0f6a417f4ac",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1512ad749dmsh8f84b933e3d1646p17a7ddjsnd0f6a417f4ac",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
};

export const fetchData = async (url, options) => {
  const responce = await fetch(url, options);
  // console.log(responce);
  const data = await responce.json();
  // console.log(data);

  return data;
};
