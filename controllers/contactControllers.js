//@desc getting all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.json({ message: "Getting all contacts" });
};

//@desc Creating new  contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("Request body : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  res.status(201).json({ message: "Creating contact" });
};
//@desc getting new single contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.json({ message: `Getting all single contact for ${req.params.id}` });
};

//@desc Updating contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.json({ message: `Updating all contacts for ${req.params.id}` });
};

//@desc Deleting contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.json({ message: `Deleting all contacts ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
