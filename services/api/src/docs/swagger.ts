import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Traffic Management API",
      version: "1.0.0",
      description: "REST APIs for a real-time traffic management platform"
    },
    servers: [
      {
        url: "http://localhost:8000/api/v1"
      }
    ]
  },
  apis: []
});

