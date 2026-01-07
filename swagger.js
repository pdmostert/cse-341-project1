const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE 341 Project API",
    description: "API Documentation for CSE 341 Project",
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],
  definitions: {
    Contact: {
      type: "object",
      properties: {
        _id: { type: "string", example: "507f1f77bcf86cd799439011" },
        firstName: { type: "string", example: "John" },
        lastName: { type: "string", example: "Doe" },
        email: { type: "string", example: "john.doe@example.com" },
        favoriteColor: { type: "string", example: "blue" },
        birthday: { type: "string", format: "date", example: "1990-01-01" },
      },
    },
    CreateContact: {
      type: "object",
      required: ["firstName", "lastName", "email"],
      properties: {
        firstName: { type: "string", example: "John" },
        lastName: { type: "string", example: "Doe" },
        email: { type: "string", example: "john.doe@example.com" },
        favoriteColor: { type: "string", example: "blue" },
        birthday: { type: "string", format: "date", example: "1990-01-01" },
      },
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
