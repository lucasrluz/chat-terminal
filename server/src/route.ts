import express, { Request, Response } from 'express';

export const router = express.Router();

const users: string[] = [];

router.post('/registration', (req: Request, res: Response) => {
  const user = users.indexOf(req.body.username);

  if (user !== -1) return res.status(500).json({
      message: 'Este nome de usuário ja está em uso'
    });

  users.push(req.body.username);

  res.status(201).json({
    message: 'Cadastro realizado com sucesso'
  });
})

router.post('/login', (req: Request, res: Response) => { 
  const user = users.indexOf(req.body.username);

  if (user === -1) return res.status(401).json({
    message: 'Usuário não encontrado'
  });

  return res.status(200).json(user);
})