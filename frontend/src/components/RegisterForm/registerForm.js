import { z } from "zod";

export const registerFormSchema =
    z.object({
        fullName:
            z.string()
            .nonempty("O nome é obrigatório")
            .min(3, "O nome precisa conter pelo menos 3 caracteres"),
        email:
            z.string()
            .nonempty("O e-mail é obrigatório"),
        password: z.string()
            .nonempty("A senha é obrigatória")
            .min(8, "Deve ter no mínimo 8 caracteres")
            .regex(/(?=.*?[A-Z])/, "Deve ter pelo menos uma letra maiúscula")
            .regex(/(?=.*?[a-z])/, "Deve ter pelo menos uma letra minúscula")
            .regex(/(?=.*?[0-9])/, "Deve ter pelo menos um número")
            .regex(/(?=.*?[#?!@$%^&*-])/, "Deve ter pelo menos um caractere especial"),
        confirmPassword:
            z.string()
            .nonempty("Confirmar a senha é obrigatório"),
        phone: 
            z.string()
            .min(11,"Deve conter exatamente 11 números")
            .max(11,"Deve conter exatamente 11 números"),
    }).refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"]
    });