import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Esquemas Zod para validación de payload Register
const userSchema = z.object({
  docType: z.string().min(1, 'docType es obligatorio'),
  doc: z.string().min(1, 'doc es obligatorio'),
  name: z.string().min(1, 'name es obligatorio'),
});

const registerSchema = z.object({
  users: userSchema,
  // ISO 8601 / RFC 3339 (ej: 2024-01-01T12:00:00Z)
  dateTime: z.string().datetime({ message: 'dateTime debe estar en formato ISO 8601' }),
  registerBy: z.string().min(1, 'registerBy es obligatorio'),
});

const registerTransactionSchema = z.object({
  registers: z.array(registerSchema, { required_error: 'registers es obligatorio' }),
});

export function validateRegisterTransaction(req: Request, res: Response, next: NextFunction) {
  const parsed = registerTransactionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Solicitud inválida',
      details: parsed.error.errors.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // Reemplazamos el body con la data validada/normalizada
  req.body = parsed.data as unknown;
  return next();
}

