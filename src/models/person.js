import mongoose from 'mongoose'


const personSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "firstname is required"],
        maxlength: [60, "firstname is longer than 60 characters"]
    },
    lastname: {
        type: String,
        required: [true, "lastname is required"],
        maxlength: [80, "lastname is longer than 60 characters"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        validate: {
            validator: function (value) {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(value);
            },
            message: props => `${props.value} is not a valid email`
        },
        maxlength: 80
    },
    eventDate: {
        type: Date,
        required: [true, "date of event is required"]
    }
})

export default mongoose.model("person", personSchema)