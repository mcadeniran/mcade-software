import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Your name is too long.'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(254, 'Your email address is too long.'),

  company: z
    .string()
    .trim()
    .max(120, 'Company name is too long.')
    .optional()
    .default(''),

  service: z
    .string()
    .trim()
    .max(100, 'Invalid service selection.')
    .optional()
    .default(''),

  budget: z
    .string()
    .trim()
    .max(100, 'Invalid budget selection.')
    .optional()
    .default(''),

  message: z
    .string()
    .trim()
    .min(20, 'Please provide at least 20 characters.')
    .max(5000, 'Your message is too long.'),

  website: z.string().max(0).optional().default(''),
});

export type ContactFormData = z.infer<typeof contactSchema>;
