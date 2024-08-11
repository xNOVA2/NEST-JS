import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserSchema extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password:{
        type: string,
        select: false
    }

    @Prop()
    age?: number;

    @Prop()
    address?: string;

    @Prop()
    location?: string;

    @Prop()
    profilePicture?: string;
}

export const User = SchemaFactory.createForClass(UserSchema);
