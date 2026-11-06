import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ServiceCategory } from "@/lib/service-rates";

const triggerClass =
  "min-h-12 rounded-none px-4 py-3 data-[state=active]:bg-crimson data-[state=active]:text-crimson-foreground data-[state=active]:shadow-none";

export function ServiceCategories({ category, onChange, bridal, regular, trainings }: {
  category: ServiceCategory;
  onChange: (category: ServiceCategory) => void;
  bridal: ReactNode;
  regular: ReactNode;
  trainings: ReactNode;
}) {
  return (
    <Tabs
      value={category}
      onValueChange={(value) => onChange(value === "bridal" ? "bridal" : value === "trainings" ? "trainings" : "regular")}
      className="mt-10"
    >
      <TabsList aria-label="Package category" className="grid h-auto w-full grid-cols-3 rounded-none border-b border-gold bg-transparent p-0">
        <TabsTrigger value="bridal" className={triggerClass}>Bridal Makeup</TabsTrigger>
        <TabsTrigger value="regular" className={triggerClass}>Regular Makeup</TabsTrigger>
        <TabsTrigger value="trainings" className={triggerClass}>Trainings</TabsTrigger>
      </TabsList>
      <TabsContent value="bridal" className="mt-8 space-y-8">{bridal}</TabsContent>
      <TabsContent value="regular" className="mt-8 space-y-8">{regular}</TabsContent>
      <TabsContent value="trainings" className="mt-8 space-y-8">{trainings}</TabsContent>
    </Tabs>
  );
}
