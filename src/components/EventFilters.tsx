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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  sport: z.string().min(1, "Выберите вид спорта"),
  discipline: z.string().min(1, "Выберите дисциплину"),
  program: z.string().min(1, "Выберите программу"),
  location: z.string().min(1, "Укажите место проведения"),
  participants: z.string().min(1, "Укажите количество участников"),
  gender: z.string().min(1, "Выберите пол"),
  ageGroup: z.string().min(1, "Выберите возрастную группу"),
  dateStart: z.string().min(1, "Выберите дату начала"),
  dateEnd: z.string().min(1, "Выберите дату окончания"),
  competitionType: z.string().min(1, "Выберите тип соревнования"),
});

export function EventFilters() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sport: "",
      discipline: "",
      program: "",
      location: "",
      participants: "",
      gender: "",
      ageGroup: "",
      dateStart: new Date().toISOString().split('T')[0],
      dateEnd: new Date().toISOString().split('T')[0],
      competitionType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          {/* Вид спорта */}
          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Вид спорта</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вид спорта" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basketball">Баскетбол</SelectItem>
                    <SelectItem value="swimming">Плавание</SelectItem>
                    <SelectItem value="volleyball">Волейбол</SelectItem>
                    <SelectItem value="football">Футбол</SelectItem>
                    <SelectItem value="tennis">Теннис</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Дисциплина */}
          <FormField
            control={form.control}
            name="discipline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дисциплина</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите дисциплину" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="3x3">3x3</SelectItem>
                    <SelectItem value="5x5">5x5</SelectItem>
                    <SelectItem value="freestyle">Вольный стиль</SelectItem>
                    <SelectItem value="butterfly">Баттерфляй</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Программа */}
          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Программа</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите программу" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="olympic">Олимпийская</SelectItem>
                    <SelectItem value="paralympic">Паралимпийская</SelectItem>
                    <SelectItem value="youth">Молодежная</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Место проведения */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Место проведения</FormLabel>
                <FormControl>
                  <Input placeholder="Введите город" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Количество участников */}
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Количество участников</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Введите количество" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Пол */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пол</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите пол" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Мужской</SelectItem>
                    <SelectItem value="female">Женский</SelectItem>
                    <SelectItem value="mixed">Смешанный</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Возрастная группа */}
          <FormField
            control={form.control}
            name="ageGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Возрастная группа</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите возраст" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="children">До 14 лет</SelectItem>
                    <SelectItem value="youth">14-18 лет</SelectItem>
                    <SelectItem value="adult">18-35 лет</SelectItem>
                    <SelectItem value="senior">35+ лет</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Дата начала */}
          <FormField
            control={form.control}
            name="dateStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата начала</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Дата окончания */}
          <FormField
            control={form.control}
            name="dateEnd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата окончания</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Тип соревнования */}
          <FormField
            control={form.control}
            name="competitionType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип соревнования</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="regional">Межрегиональные</SelectItem>
                    <SelectItem value="district">Окружные</SelectItem>
                    <SelectItem value="cup">Кубок</SelectItem>
                    <SelectItem value="championship">Чемпионат</SelectItem>
                    <SelectItem value="tournament">Турнир</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => form.reset()}
          >
            Сбросить
          </Button>
          <Button type="submit">Применить фильтры</Button>
        </div>
      </form>
    </Form>
  );
}
