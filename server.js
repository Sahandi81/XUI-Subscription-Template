const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");
const atob = require("atob");
const app = express();

dotenv.config({ path: "./config.env" });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use("/public", express.static(path.join(__dirname, "public")));

const SUB_HTTP_PORT = process.env.SUB_HTTP_PORT || 2082;
const BASE_SUB_URL = process.env.SUBSCRIPTION;
const HOST = process.env.HOST;

app.get("/sub/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const fullUrl = `${BASE_SUB_URL}${id}`;
    const response = await axios.get(fullUrl);

    const decoded = atob(response.data);
    const lines = decoded.split("\n").filter(Boolean);
    const parsedLinks = lines.map(link => {
      let type = link.startsWith("vmess://") ? "vmess" : link.startsWith("vless://") ? "vless" : "unknown";
      return { type, raw: link };
    });

    res.render(process.env.TEMPLATE_NAME || "default", {
      data: {
        id,
        suburl: fullUrl,
        decoded,
        parsedLinks
      }
    });
  } catch (err) {
    res.status(500).send("Subscription could not be fetched or decoded. " +  BASE_SUB_URL +id);
  }
});

app.listen(SUB_HTTP_PORT, process.env.HOST || '0.0.0.0', () => {
  console.log(`Server running on http://${process.env.HOST || '0.0.0.0'}:${SUB_HTTP_PORT}`);
});