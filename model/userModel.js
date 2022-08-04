const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema =mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required: true,
            unique :true,
        },
        password:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },
        // pic:{
        //     type:String,
        //     required:true,
        //     default:"https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
        // },

    },
    {timeStamp:true,}
);
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.matchPassword =async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = mongoose.model("user",userSchema);