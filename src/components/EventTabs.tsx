import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    value: "upcoming",
    label: "Ближайшие мероприятия",
  },
  {
    value: "current-week",
    label: "Мероприятия текущей недели",
  },
  {
    value: "next-month",
    label: "Мероприятия следующего месяца",
  },
  {
    value: "quarter",
    label: "Мероприятия квартала",
  },
  {
    value: "half-year",
    label: "Мероприятия полугодия",
  },
  {
    value: "other",
    label: "Другое",
  },
];

export function EventTabs() {
  return (
    <Tabs defaultValue="upcoming" className="w-full" style={{gridArea: "tabs"}}>
      <TabsList className="w-fit flex flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="p-4">Содержимое для {tab.label}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
