// categoryWithMostApps

function categoryWithMostApps() {
  const x = [
    "FAMILY",
    "GAME",
    "TOOLS",
    "BUSINESS",
    "MEDICAL",
    "PERSONALIZATION",
    "PRODUCTIVITY",
    "LIFESTYLE",
    "FINANCE",
    "SPORT",
  ];
  const y = [1827, 957, 824, 419, 394, 375, 374, 369, 342, 325];

  const trace = [
    {
      x: x,
      y: y,
      type: "bar",
      marker: { color: "rgba(255,0,0,0.6)" },
    },
  ];

  const layout = {
    title: "Category with the Most Apps",
    xaxis: { title: "Category" },
    yaxis: { title: "Number of Apps" },
  };

  Plotly.newPlot("categoryWithMostApps", trace, layout);
}

categoryWithMostApps();

// plotFreeVsPaidApps
function plotFreeVsPaidApps() {
  const x = ["Free", "Paid"];
  const y = [8884, 802];

  // Define Data
  const trace = [
    {
      x: x,
      y: y,
      mode: "lines",
      type: "bar",
    },
  ];

  // Define Layout
  const layout = {
    xaxis: { title: "Free" },
    yaxis: { title: "Paid" },
    title: "Free vs Paid Apps",
  };

  Plotly.newPlot("freeVsPaidApps", trace, layout);
}

plotFreeVsPaidApps();

//plotAppsInEachCategory
function plotAppsInEachCategory() {
  const categoryName = [
    "Art and Design",
    "Auto and Vehicles",
    "Beauty",
    "Books and Reference",
    "Business",
    "Comics",
    "Communication",
    "Dating",
    "Education",
    "Entertainment",
    "Events",
    "Finance",
    "Food and Drink",
    "Health and Fitness",
    "House and Home",
    "Libraries and Demo",
    "Lifestyle",
    "Game",
    "Family",
    "Medical",
    "Social",
    "Shopping",
    "Photography",
    "Sports",
    "Travel and Local",
  ];
  const totalApps = [
    64, 85, 53, 211, 419, 56, 315, 171, 119, 102, 64, 342, 111, 287, 74, 84,
    369, 957, 1827, 394, 238, 202, 279, 325, 219,
  ];

  const trace = {
    x: categoryName,
    y: totalApps,
    type: "bar",
  };
  const layout = {
    title: "Number of Apps in Each Category",
    xaxis: { title: "Category Name" },
    yaxis: { title: "Number of Apps" },
    margin: {
      l: 100,
      r: 60,
      t: 60,
      b: 150,
      pad: 10,
    },
  };
  Plotly.newPlot("appsInEachCategory", [trace], layout);
}

plotAppsInEachCategory();

//plotFamilyCategoryInstalls

function plotFamilyCategoryInstalls() {
  const trace = {
    x: ["Family"],
    y: [4426920405],
    type: "bar",
  };
  const layout = {
    title: "Total Installs for Family Category",
    xaxis: { title: "Category" },
    yaxis: { title: "Total Installs" },
  };

  Plotly.newPlot("familyCategoryInstalls", [trace], layout);
}

plotFamilyCategoryInstalls();

//plotTop10LeastInstalls
function plotTop10LeastInstalls() {
  const nameOfLeastInstall = [
    "Command & Conquer: Rivals",
    "CX Network",
    "cronometa-br",
    "EP Cook Book",
    "Eu sou Rico",
    "AP Series Solution Pro",
    "Ain Arabic Kids Alif Ba ta",
    "Ak Parti Yardim Toplama",
    "I'm Rich/Eu sou Rico/...",
    "EG | Explore Folegandros",
  ];
  const numberOfLeastInstall = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const trace = {
    x: nameOfLeastInstall,
    y: numberOfLeastInstall,
    mode: "line ",
    type: "bar",
  };
  const layout = {
    title: "Top 10 Apps with Least Installs",
    xaxis: { title: "App Name" },
    yaxis: { title: "Number of Installs" },
  };
  Plotly.newPlot("top10LeastInstalls", [trace], layout);
}

plotTop10LeastInstalls();

//plotTop10MostInstalls
function plotTop10MostInstalls() {
  const top10MostInstalls = [
    "WhatsApp Messager",
    "Youtube",
    "Facebook",
    "Gmail",
    "Google",
    "Google Chrome: Fast & Secure",
    "Google Drive",
    "Google News",
    "Google Photos",
    "Google Play Books",
  ];
  const numberTop10MostInstalls = [
    1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
    1000000000, 1000000000, 1000000000, 1000000000,
  ];

  const trace = {
    x: top10MostInstalls,
    y: numberTop10MostInstalls,
    type: "bar",
  };
  const layout = {
    title: "Top 10 Apps with Most Installs",
    xaxis: { title: "App Name" },
    yaxis: { title: "Number of Installs" },
  };
  Plotly.newPlot("top10MostInstalls", [trace], layout);
}

plotTop10MostInstalls();

//plotContentRatingCount
function plotContentRatingCount() {
  const contentRating = [
    "Mature 7+",
    "Everyone",
    "10+",
    "Teen",
    "NULL",
    "Adults only 18+",
  ];
  const totalApps = [393, 7884, 332, 1035, 49, 3];
  const trace = {
    labels: contentRating,
    values: totalApps,
    type: "pie",
  };
  const layout = {
    title: "Content Rating and Total Count",
  };
  Plotly.newPlot("contentRatingCount", [trace], layout);
}

plotContentRatingCount();

//plotCategoryAppCount
function plotCategoryAppCount() {
  const categoryName = [
    "FAMILY",
    "GAME",
    "TOOLS",
    "BUSINESS",
    "MEDICAL",
    "PERSONALIZATION",
    "PRODUCTIVITY",
    "LIFESTYLE",
    "FINANCE",
    "SPORT",
    "COMMUNICATION",
    "HEALTH AND FITNESS",
    "PHOTOGRAPHY",
    "NEWS AND MAGAZINES",
    "SOCIAL",
    "BOOKS AND REFERENCE",
    "TRAVEL AND LOCAL",
    "SHOPPING",
    "DATING",
    "VEDIO PLAYERS",
    "MAPS AND NAVIGATION",
    "EDUCATION",
    "FOOD AND DRINK",
    "ENTERTAINMENT",
  ];
  const totalApps = [
    1827, 957, 824, 419, 394, 375, 374, 342, 325, 315, 287, 279, 254, 238, 221,
    219, 202, 171, 163, 131, 119, 111, 102,
  ];

  const trace = {
    x: categoryName,
    y: totalApps,
    type: "bar",
  };
  const layout = {
    title: "Category and Total App Count",
    xaxis: { title: "Category" },
    yaxis: { title: "Total App Count" },
    margin: {
      l: 100,
      r: 60,
      t: 60,
      b: 200,
      pad: 10,
    },
  };
  Plotly.newPlot("categoryAppCount", [trace], layout);
}
plotCategoryAppCount();

//plotTop10AppsByRating
function plotTop10AppsByRating() {
  const appName = [
    "ADS-B Driver",
    "AI Today: Artifical Intelligence News & AI 101",
    "AC DC Power Monitor ",
    "Ag Valley Cooperative",
    "AJ Blue Icon Pack",
    "30WPM Amateur ham radio Koch CW Morse code trainer",
    "A-Y Collection",
    "211-Ck",
    "Accounting Quiz (AQ) Malaysia",
    "420 BZ Budeze Delivery",
  ];
  const rating = [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0];
  const trace = {
    x: appName,
    y: rating,
    type: "bar",
  };
  const layout = {
    title: "Top 10 Apps by Rating",
    xaxis: { title: "App Name" },
    yaxis: { title: "Rating" },
    margin: {
      l: 100,
      r: 60,
      t: 60,
      b: 200,
      pad: 10,
    },
  };
  Plotly.newPlot("top10AppsByRating", [trace], layout);
}

plotTop10AppsByRating();

//  plotCategoryMaxRatingApps
function plotCategoryMaxRatingApps() {
  const categoryName = [
    "GAME",
    "FAMILY",
    "MEDICAL",
    "SHOPPING",
    "LIFESTYLE",
    "TOOLS",
    "BUSINESS",
    "NEWS AND MAGAZINES",
    "PERSONALIZATION",
    "PHOTOGRAPHY",
    "DATING",
    "HEALTH AND FITNESS",
    "FOOD AND DRINK",
    "BOOKS AND REFERENCE",
    "TRAVEL AND LOCAL",
    "FINANCE",
    "COMMUNICATION",
    "PRODUCTIVITY",
    "SOCIAL",
    "SPORT",
    "PARENTING",
    "EVENTS",
    "LIBRARIES AND DEMO",
  ];

  const totalApps = [
    12, 67, 25, 6, 29, 17, 18, 7, 10, 6, 6, 12, 2, 6, 3, 8, 8, 4, 1, 6, 2,
  ];
  const trace = {
    x: categoryName,
    y: totalApps,
    type: "bar",
  };
  const layout = {
    title: "Category with the Most Apps with Maximum Rating",
    xaxis: { title: "Category" },
    yaxis: { title: "App Count" },
    margin: {
      l: 100,
      r: 60,
      t: 60,
      b: 200,
      pad: 10,
    },
  };
  Plotly.newPlot("categoryMaxRatingApps", [trace], layout);
}

plotCategoryMaxRatingApps();

//  plotHighestRatingAppInCategory
function plotHighestRatingAppInCategory() {
  const categoryName = [
    "ART AND DESIGN",
    "ART AND DESIGN",
    "ART AND DESIGN",
    "ART AND DESIGN",
    "ART AND DESIGN",
    "ART AND DESIGN",
    "BEAUTY",
    "BOOKS AND REFERENCE",
    "BOOKS AND REFERENCE",
    "BOOKS AND REFERENCE",
    "BOOKS AND REFERENCE",
    "BOOKS AND REFERENCE",
    "BOOKS AND REFERENCE",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
  ];
  const rating = [
    5.0, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
    5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
  ];
  const trace = {
    x: categoryName,
    y: rating,
    // text: data.map((item) => item.name),
    type: "bar",
  };
  const layout = {
    title: "Highest Rating App in Each Category",
    xaxis: { title: "Category" },
    yaxis: { title: "Rating" },
  };
  Plotly.newPlot("highestRatingAppInCategory", [trace], layout);
}

plotHighestRatingAppInCategory();

// plotAppsBySize
function plotAppsBySize() {
  const totalSpecificSizeApps = [8411];
  const totalVariableSizeApps = [1226];
  const trace = {
    x: totalSpecificSizeApps,
    y: totalVariableSizeApps,
    type: "bar",
  };
  const layout = {
    title: "Total Number of Apps by Size",
    xaxis: { title: "Size" },
    yaxis: { title: "App Count" },
  };
  Plotly.newPlot("appsBySize", [trace], layout);
}

plotAppsBySize();
