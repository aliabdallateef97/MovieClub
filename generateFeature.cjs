const fs = require("fs");

const featureName = process.argv[2];
const featureDirectory = `src/features/${featureName}`;

const featureStructure = {
  "assets/images": "",
  components: "index.js",
  hooks: "index.js",
  locales: ["ar.json", "en.json"],
  models: "index.js",
  services: "index.js",
  "redux/slices": "",
  redux: ["actions.js", "selectors.js"],
  "static/forms": "index.js",
  "static/validations": "index.js",
};

if (featureName === undefined) {
  throw new Error(`please provide the feature name`);
}

// Throw an error if feature already exists
if (fs.existsSync(featureDirectory)) {
  throw new Error(`Feature ${featureName} already exists!`);
}

// create the feature directory if it doesn't exist
fs.mkdirSync(featureDirectory);

// create the subdirectories and files
Object.keys(featureStructure).forEach((dir) => {
  const dirPath = `${featureDirectory}/${dir}`;
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (featureStructure[dir]) {
    if (Array.isArray(featureStructure[dir])) {
      featureStructure[dir].forEach((file) => {
        fs.writeFileSync(`${dirPath}/${file}`, "");
      });
    } else {
      fs.writeFileSync(`${dirPath}/${featureStructure[dir]}`, "");
    }
  }
});

