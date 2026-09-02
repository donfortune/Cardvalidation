import { Request, Response } from 'express';
import { valid } from '../Utils/luhn';

export const validateCard = async (req: Request, res: Response) => {
  try {
    const { cardNumber } = req.body;

   
    if (!cardNumber || typeof cardNumber !== 'string') {
      return res.status(400).json({ 
        error: 'Bad Request', 
        message: 'The cardNumber field is required and must be a string' 
      });
    }

    
    const isValid = valid(cardNumber);

    
    if (isValid) {
      return res.status(200).json({ valid: true, message: 'Card number is valid.' });
    } else {
      return res.status(200).json({ valid: false, message: 'Card number is invalid.' });
    }

  } catch (error) {
    console.error('Error validating card:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}