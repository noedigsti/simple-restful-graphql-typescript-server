import express from "express";
import path from "path";

export const setupRedoc = (app: express.Application) => {
  app.use("/redoc/apis", express.static(__dirname));
  app.get("/redoc/apis", (_, res) => {
    res.sendFile(path.join(__dirname, "redoc.html"));
  });

  // Update the file path to point to the new openapi.yaml file
  const apiSpec = path.join(__dirname, "openapi.yaml");

  // Configure Redoc options
  const options = {
    title: "API Documentation",
    specUrl: `/redoc/apis/${apiSpec}`,
  };

  // Inject Redoc HTML into the response
  app.get("/redoc", (_, res) => {
    res.render("redoc", { title: options.title, specUrl: options.specUrl });
  });
};
