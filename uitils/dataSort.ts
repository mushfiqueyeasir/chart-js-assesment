//All The Age Group Data
export const ageChartData = (data) => {
  let age = [];
  data.forEach((entry) => {
    const answer = (entry as any).age;
    if (!age.includes(answer)) {
      age.push(answer);
    }
  });

  let maleCount = [];
  const femaleCount = [];

  age.forEach((element) => {
    maleCount.push(
      data.filter(
        (entry) =>
          (entry as any).age === element && (entry as any).gender === "Male"
      ).length
    );
    femaleCount.push(
      data.filter(
        (entry) =>
          (entry as any).age === element && (entry as any).gender === "Female"
      ).length
    );
  });

  return { ageGroup: age, male: maleCount, female: femaleCount };
};

//All Location Data

export const locationChartData = (data) => {
  let location = [];
  data.forEach((entry) => {
    const answer = (entry as any).location;
    if (!location.includes(answer)) {
      location.push(answer);
    }
  });

  let locationData = {};
  location.forEach((element) => {
    locationData[element] = data.filter(
      (entry) => (entry as any).location === element
    ).length;
  });

  return locationData;
};

//All comments data

export const commentsChartData = (data) => {
  let comments = [];
  data.forEach((entry) => {
    const answer = (entry as any).comment;
    if (answer && !comments.includes(answer)) {
      comments.push(answer);
    }
  });

  let commentsData = {};
  comments.forEach((element) => {
    commentsData[element] = data.filter(
      (entry) => (entry as any).comment === element
    ).length;
  });
  return commentsData;
};
