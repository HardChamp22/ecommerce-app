import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from '../models/Order.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/proshop';

async function run(){
  try{
    await mongoose.connect(MONGO_URI);
    console.log('Mongo connected');
    const user = await User.findOne({ role: 'customer' });
    const products = await Product.find().limit(2);
    if(!user || products.length === 0){
      console.log('Need at least 1 customer and products to seed orders');
      process.exit(0);
    }
    const items = products.map(p => ({
      productId: p._id,
      name: p.name,
      quantity: 1,
      price: p.price,
      total: p.price,
    }));
    const totalAmount = items.reduce((s,it)=> s+it.total, 0);
    const order = new Order({
      userId: user._id,
      items,
      shippingAddress: { street: '221B Baker Street', city: 'London', state: 'London', postalCode: 'NW16XE', country: 'UK' },
      payment: { method: 'Credit Card', status: 'Paid', transactionId: 'SEED_' + Date.now() },
      orderStatus: 'Shipped',
      totalAmount,
    });
    await order.save();
    console.log('Seeded order id:', order._id.toString());
    process.exit(0);
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}

run();


