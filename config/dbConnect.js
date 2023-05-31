const { default: mongoose } = require("mongoose")

// module.exports = {
//  async dbConnect() {
//    await mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     console.log('mongodb connected')
// }}

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected')
    } catch (error) {
       console.log('database error') 
    }
}
module.exports = dbConnect;