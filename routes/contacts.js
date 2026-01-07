const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contactsController");

router.get(
  "/",
  contactsController.getAllContacts,
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get all contacts'
  // #swagger.responses[200] = { description: 'List of contacts retrieved successfully', schema: [{ $ref: '#/definitions/Contact' }] }
);

router.get(
  "/:id",
  contactsController.getContactById,
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get a single contact by ID'
  // #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
  // #swagger.responses[200] = { description: 'Contact found', schema: { $ref: '#/definitions/Contact' } }
  // #swagger.responses[404] = { description: 'Contact not found' }
);

router.post(
  "/",
  contactsController.createContact,
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Create a new contact'
  // #swagger.parameters['body'] = { in: 'body', description: 'Contact information', required: true, schema: { $ref: '#/definitions/CreateContact' } }
  // #swagger.responses[201] = { description: 'Contact created successfully' }
  // #swagger.responses[500] = { description: 'Failed to create contact' }
);

router.put(
  "/:id",
  contactsController.updateContact,
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Update an existing contact'
  // #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
  // #swagger.parameters['body'] = { in: 'body', description: 'Updated contact information', required: true, schema: { $ref: '#/definitions/CreateContact' } }
  // #swagger.responses[200] = { description: 'Contact updated successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
);

router.delete(
  "/:id",
  contactsController.deleteContact,
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Delete a contact'
  // #swagger.parameters['id'] = { in: 'path', description: 'Contact ID', required: true, type: 'string' }
  // #swagger.responses[200] = { description: 'Contact deleted successfully' }
  // #swagger.responses[404] = { description: 'Contact not found' }
);

module.exports = router;
