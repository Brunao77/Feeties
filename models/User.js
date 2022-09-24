import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a name for this org.'],
      maxlength: [60, 'Name cannot be more than 60 characters']
    },
    profile_photo: {
      type: String
    },
    banner_photo: {
      type: String
    },
    description: {
      type: String
    },
    city: {
      type: String,
      maxlength: [60, 'City cannot be more than 60 characters']
    },
    contact: {
      phone_number: {
        type: Number
      },
      social_media: {
        instagram: {
          type: String
        },
        twitter: {
          type: String
        },
        facebook: {
          type: String
        }
      }
    }
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
