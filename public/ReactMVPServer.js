import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = 8000;
const pool = new pg.Pool({ password: "12345", database: "dead_people_quotes" });

app.use(express.json());
app.use(cors());
// app.use(express.static("static"));

app.get("/quotes", (req, res) => {
  pool.query("SELECT * FROM quotes").then((data) => {
    res.send(data.rows);
  });
});

app.get("/dead_people", (req, res) => {
  pool.query("SELECT * FROM dead_people").then((data) => {
    res.send(data.rows);
  });
});

app.post("/quotes", (req, res) => {
  const { quote, original_language, person_name } = req.body;
  if (quote.length !== 0) {
    pool
      .query(
        "INSERT INTO quotes (quote, original_language, person_name) VALUES ($1, $2, $3) RETURNING *",
        [quote, original_language, person_name]
      )
      .then((addedQuote) => {
        res.send(addedQuote.rows[0]);
      });
  } else {
    res.sendStatus(418);
  }
});

app.delete("/quotes/:id", (req, res) => {
  const id = req.params.id;
  pool
    .query("DELETE FROM quotes WHERE id = $1 RETURNING *;", [id])
    .then((data) => {
      if (data.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200);
        res.send(data.rows[0]);
      }
    });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
