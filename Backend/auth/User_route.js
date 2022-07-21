const userSchema = mongoose.Schema({
    email: String,
    passord: String,
    gender: { type: String, enum: ['Male', 'Female'] },
    dob: String,
    height: String,
    weight: String
})



