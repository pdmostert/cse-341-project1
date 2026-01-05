const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

getAllContacts = async (req, res, next) => {
  try {
    const contacts = await mongodb.getDb().db().collection("contacts").find();
    const contactsList = await contacts.toArray();
    res.status(200).json(contactsList);
  } catch (error) {
    res.status(500).json({ message: "Fetching contacts failed." });
  }
};

// createContact = async (req, res, next) => {
//   try {
//     const newContact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday,
//     };

//     const result = await mongodb
//       .getDb()
//       .db()
//       .collection("contacts")
//       .insertOne(newContact);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Creating contact failed." });
//   }
// };

getContactById = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .findOne({ _id: contactId });
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: "Contact not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Fetching contact failed." });
  }
};

// updateContact = async (req, res, next) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const updatedContact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday,
//     };
//     const result = await mongodb
//       .getDb()
//       .db()
//       .collection("contacts")
//       .updateOne({ _id: contactId }, { $set: updatedContact });
//     if (result.matchedCount > 0) {
//       res.status(200).json(result);
//     } else {
//       res.status(404).json({ message: "Contact not found." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Updating contact failed." });
//   }
// };

// deleteContact = async (req, res, next) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const result = await mongodb
//       .getDb()
//       .db()
//       .collection("contacts")
//       .deleteOne({ _id: contactId });
//     if (result.deletedCount > 0) {
//       res.status(200).json(result);
//     } else {
//       res.status(404).json({ message: "Contact not found." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Deleting contact failed." });
//   }
// };

module.exports = {
  getAllContacts,
  // createContact,
  getContactById,
  // updateContact,
  // deleteContact,
};
