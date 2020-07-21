
const tableBody = document.getElementById("tableBody");
const widthOfBlock = 30;
const heightOfBlock = 30;
const numberOfColumns = parseInt(tableBody.getBoundingClientRect().width / widthOfBlock, 10);
const numberOfRows = parseInt((window.innerHeight - tableBody.getBoundingClientRect().y) / heightOfBlock, 10);
const slowSpeedOfAnimation = 200;
const mediumSpeedOfAnimation = 100;
const fastSpeedOfAnimation = 50;