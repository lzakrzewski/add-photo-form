module.exports = {
    moduleFileExtensions: ["js", "vue"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "vue-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss)$": "<rootDir>/tests/styleMock.js"
    },
    testMatch: [
        "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    testURL: "http://localhost/"
};
