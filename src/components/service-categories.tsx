import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ServiceCategory } from "@/lib/service-rates";

export function ServiceCategories({ category, onChange, bridal, events }: {
  category: ServiceCategory;
  onChange: (category: ServiceCategory) => void;
  bridal: ReactNode;
  events: ReactNode;
}) {
  return (
    <Tabs value={category} onValueChange={(value) => onChange(value === "bridal" ? "bridal" : "special-events")} className="mt-10">
      <TabsList aria-label="Service category" className="grid h-auto w-full grid-cols-2 rounded-none border-b border-gold bg-transparent p-0">
        <TabsTrigger value="bridal" className="min-h-12 rounded-none px-4 py-3 data-[state=active]:bg-crimson data-[state=active]:text-crimson-foreground data-[state=active]:shadow-none">Bridal</TabsTrigger>
        <TabsTrigger value="special-events" className="min-h-12 rounded-none px-4 py-3 data-[state=active]:bg-crimson data-[state=active]:text-crimson-foreground data-[state=active]:shadow-none">Special Events</TabsTrigger>
      </TabsList>
      <TabsContent value="bridal" className="mt-8 space-y-8">{bridal}</TabsContent>
      <TabsContent value="special-events" className="mt-8 space-y-8">{events}</TabsContent>
    </Tabs>
  );
}