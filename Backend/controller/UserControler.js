import Contact from "../modals/User.js";

export const registerUser = async (req,res) => {
    try{
    const {firstname,lastname,address,country,city,gender,bloodGroup,date,email} = req.body;

    console.log("firstname" + firstname )
    const existingUser = await Contact.findOne({ email });
    if (existingUser) {
        return res.status(400).send("Email already in use");
    }

    const contactInfo = new Contact({
        firstname,
        lastname,
        address,
        country,
        city,
        gender,
        bloodGroup,
        date,
        email
    });
    
    await contactInfo.save();

    return res.status(201).send(contactInfo);
} catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).send("Server Error");
}
}