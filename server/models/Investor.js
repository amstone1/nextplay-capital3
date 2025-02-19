const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  totalInvestment: { 
    type: Number, 
    required: true,
    default: 0,
    min: [0, 'Total investment must be positive']
  },
<<<<<<< HEAD
  investments: [{
    investment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Investment'
    },
    athlete: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Athlete'
    },
    amount: Number
  }],
=======
>>>>>>> 6a91e8f6251b8d186ad4ef942dd89a8d70954b5a
  investmentCount: {
    type: Number,
    default: 0,
    min: 0
  },
  lastInvestmentDate: {
    type: Date
  }
}, { timestamps: true });

investorSchema.index({ user: 1 });
investorSchema.index({ totalInvestment: -1 });

module.exports = mongoose.model('Investor', investorSchema);