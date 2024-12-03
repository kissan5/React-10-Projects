const express = require("express");
const cors = require("cors");
require("./DB/config");
const users = require("./DB/users");
const admins = require("./DB/admins");
const detectedplates = require("./DB/detectedplates");

const app = express();
app.use(cors());

// Set a limit for JSON and URL-encoded bodies
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// User registration
app.post("/register", async (req, resp) => {
  try {
    let data = new users(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    delete result.Cpassword;
    resp.send(result);
  } catch (error) {
    console.log(error);
    resp.status(500).send({ error: "Registration failed" });
  }
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await users.findOne(req.body).select("-password -Cpassword");

    if (user) {
      resp.send({ user, userType: "user" });
      return;
    }

    let admin = await admins.findOne(req.body).select("-password -Cpassword");
    if (admin) {
      resp.send({ user: admin, userType: "admin" });
      return;
    }

    resp.send({ result: "No User found" });
  } else {
    resp.send({ result: "No User found" });
  }
});

// Route for saving detected plates
app.post("/save_plate", async (req, resp) => {
  try {
    const { plate, time, image } = req.body;
    const detectedplatesData = new detectedplates({ plate, time, image });
    const result = await detectedplatesData.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: "Failed to save detected plate" });
  }
});

// Route for retrieving detected plates
app.get("/detected_plates", async (req, resp) => {
  try {
    const plates = await detectedplates.find({});
    resp.send(plates);
  } catch (error) {
    resp.status(500).send({ error: "Failed to retrieve detected plates" });
  }
});

// Route for deleting a detected plate by ID
app.delete("/delete_plate/:id", async (req, resp) => {
  try {
    const result = await detectedplates.findByIdAndDelete(req.params.id);
    if (result) {
      resp.send({ success: true, message: "Plate deleted successfully" });
    } else {
      resp.status(404).send({ error: "Plate not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Failed to delete plate" });
  }
});

// Route for retrieving all users
app.get("/users", async (req, resp) => {
  try {
    const usersList = await users.find({});
    resp.send(usersList);
  } catch (error) {
    resp.status(500).send({ error: "Failed to retrieve users" });
  }
});

// Route for deleting a user by ID
app.delete("/delete_user/:id", async (req, resp) => {
  try {
    const result = await users.findByIdAndDelete(req.params.id);
    if (result) {
      resp.send({ success: true, message: "User deleted successfully" });
    } else {
      resp.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Failed to delete user" });
  }
});

// In your existing Express server file
app.put("/update_admin", async (req, resp) => {
  const { id, name, email } = req.body;
  try {
    const result = await admins.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    if (result) {
      resp.send(result);
    } else {
      resp.status(404).send({ error: "Admin not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Failed to update admin" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
