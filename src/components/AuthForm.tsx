import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const emailSchema = z.object({
  email: z.string().email("Введите корректный email"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "Код должен содержать 6 цифр"),
});

export function AuthForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onEmailSubmit(values: z.infer<typeof emailSchema>) {
    try {
      // Здесь должен быть запрос на отправку кода
      console.log("Отправка кода на email:", values.email);
      setEmail(values.email);
      setIsEmailSent(true);
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
    }
  }

  async function onOTPSubmit(values: z.infer<typeof otpSchema>) {
    try {
      // Здесь должна быть проверка кода
      console.log("Проверка кода:", values.otp);
    } catch (error) {
      console.error("Ошибка при проверке кода:", error);
    }
  }

  if (!isEmailSent) {
    return (
      <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-md m-4">
        <h2 className="text-2xl font-bold mb-6">Вход в систему</h2>
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(onEmailSubmit)}
            className="space-y-6"
          >
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите ваш email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Получить код
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Подтверждение</h2>
      <p className="text-muted-foreground mb-6">
        Код подтверждения отправлен на {email}
      </p>
      <Form {...otpForm}>
        <form
          onSubmit={otpForm.handleSubmit(onOTPSubmit)}
          className="space-y-6"
        >
          <FormField
            control={otpForm.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Код подтверждения</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Button type="submit" className="w-full">
              Подтвердить
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setIsEmailSent(false)}
            >
              Изменить email
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
